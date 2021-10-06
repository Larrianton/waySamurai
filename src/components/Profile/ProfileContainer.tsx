import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import {getProfile, ProfileType} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from "react-router"
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamProfile = {
    userId: string | undefined
}
type RouteProfile = RouteComponentProps<PathParamProfile>

type mapDispatchToPropsType = {
    getProfile: (userId:string) => void
}
export type mapStateToPropsType = {
    userProfile: ProfileType | null
}
export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType & RouteProfile

export class ProfileContainer extends React.Component<ProfilePagePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getProfile(userId)
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
    }

}
// Пошагово Обернули Компоненты HOC
// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
// let ProfileWithUrlData = withRouter(AuthRedirectComponent)
// export const ProfileWithConnect = connect(mapStateToProps,{getProfile})(ProfileWithUrlData)


export const ProfileWithCompose = compose<React.ComponentType>(
    connect(mapStateToProps,{getProfile} ),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
// Ад HOC
// let ProfileWithUrlData = withRouter(ProfileContainer)
// export const ProfileWithConnect = WithAuthRedirect(connect(mapStateToProps,{getProfile})(ProfileWithUrlData))