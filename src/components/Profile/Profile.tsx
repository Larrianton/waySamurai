import React from 'react';
import {MypostsContainer} from "./Myposts/MypostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "./ProfileContainer";


export const Profile: React.FC<ProfilePagePropsType> = (props) => {

    debugger
    return (
        <div>
            <ProfileInfo userProfile={props.userProfile}/>
            <MypostsContainer/>
        </div>

    );
}
