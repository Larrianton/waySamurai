import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileType, setProfile} from "../../redux/profile-reducer";
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from "react-router"

type PathParamProfile = {
    userId: string
}
type RouteProfile = RouteComponentProps<PathParamProfile>

type mapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
}
export type mapStateToPropsType = {
    userProfile: ProfileType | null
}
export type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType & RouteProfile

export class ProfileContainer extends React.Component<ProfilePagePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
            debugger
            this.props.setProfile(res.data);
        })
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
        userProfile: state.profilePage.userProfile
    }

}
let ProfileWithUrlData = withRouter(ProfileContainer)
export const ProfileWithConnect = connect(mapStateToProps, {setProfile})(ProfileWithUrlData)