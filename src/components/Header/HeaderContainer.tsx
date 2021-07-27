import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setAuthUserData, setIsFetching} from "../../redux/auth-reducer";

type AuthApiType = {
    data: {
        id: string,
        login: string,
        email: string,
    }
    resultCode: number,
}
type MapStateToPropsType = {
    id: string | null,
    login: string | null,
    email: string | null,

}
type MapDispatchToPropsType = {
    setAuthUserData: (email: string, id: string, login: string) => void,
    setIsFetching: (isFetching: boolean) => void
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {

        this.props.setIsFetching(true)
        axios.get<AuthApiType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(res => {
            this.props.setIsFetching(true)
            let {email,id,login} = res.data.data
            if (res.data.resultCode === 0)
                this.props.setAuthUserData(email,id,login)
        })
    }

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        );
    }


}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        id: state.authPage.id,
        login: state.authPage.login,
        email: state.authPage.email,

    }
}

export const HeaderWithConnect = connect(mapStateToProps, {setAuthUserData, setIsFetching})(HeaderContainer)
