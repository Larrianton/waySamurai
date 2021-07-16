import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Profile} from "./Profile";
import axios from "axios";
import {ProfileType, setProfile} from "../../redux/profile-reducer";



export class ProfileContainer extends React.Component<ProfilePagePropsType> {
    componentDidMount() {

        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/users/2`).then(res => {

            this.props.setProfile(res.data);

        })

    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>

            </div>

        );
    }
}

type ProfilePagePropsType = mapStateToPropsType & mapDispatchToPropsType
type mapDispatchToPropsType = {
    setProfile: (profile: ProfileType) => void
}
type mapStateToPropsType = {
    profile: ProfileType | null
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }

}
export const ProfileWithConnect = connect(mapStateToProps, {setProfile})(ProfileContainer)