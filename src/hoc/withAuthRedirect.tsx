import React, {ComponentType} from "react"
import {Redirect} from 'react-router'
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToPropsType = {
    isAuth:boolean
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        isAuth: state.authPage.isAuth
    }
}

export function WithAuthRedirect<T>(Component:ComponentType<T>){
    debugger
    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth ,...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component  {...restProps as T} />
    }
    const connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connectedRedirectComponent
}