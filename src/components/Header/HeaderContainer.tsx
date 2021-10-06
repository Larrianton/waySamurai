import React from 'react';
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

type MapStateToPropsType = {
    id: string | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
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
        isAuth: state.authPage.isAuth
    }
}


export const HeaderWithConnect = connect(mapStateToProps, {
    getAuthUserData
})(HeaderContainer)
