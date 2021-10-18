import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getProfile, getProfileStatus, ProfileType, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from "react-router"
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";



type mapDispatchToPropsType = {
    getProfile: (userId: number | null) => void
    getProfileStatus: (userId: number | null) => void
    updateProfileStatus: (status: string) => void
}
export type mapStateToPropsType = {
    userProfile: ProfileType | null
    status: string
    id: number | null
}
export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType

export class ProfileContainer extends React.Component<ProfilePagePropsType> {
    componentDidMount() {
            this.props.getProfile(this.props.id)
            this.props.getProfileStatus(this.props.id)
    }


    render() {
        return (
            <div>
                <Profile {...this.props} userProfile={this.props.userProfile}/>

            </div>

        );
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
 return {
     userProfile: state.profilePage.userProfile,
     status: state.profilePage.status,
     id: state.authPage.id
 }

}
// Пошагово Обернул Компоненты HOC
// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
// let ProfileWithUrlData = withRouter(AuthRedirectComponent)
// export const ProfileWithConnect = connect(mapStateToProps,{getProfile})(ProfileWithUrlData)


export const ProfileWithCompose = compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile,getProfileStatus,updateProfileStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer)
// Ад HOC
// let ProfileWithUrlData = withRouter(ProfileContainer)
// export const ProfileWithConnect = WithAuthRedirect(connect(mapStateToProps,{getProfile})(ProfileWithUrlData))