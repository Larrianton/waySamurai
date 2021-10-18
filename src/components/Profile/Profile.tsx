import React from 'react';
import {MypostsContainer} from "./Myposts/MypostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "./ProfileContainer";


export const Profile: React.FC<ProfilePagePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <MypostsContainer/>
        </div>

    );
}
