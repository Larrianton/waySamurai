import React from 'react';
import {MypostsContainer} from "./Myposts/MypostsContainer";
import {ProfileInfo} from "./ProfileInfo";
import {mapStateToPropsType} from "./ProfileContainer";


export const Profile: React.FC<mapStateToPropsType> = (props) => {


    return (
        <div>
            <ProfileInfo userProfile={props.userProfile}/>
            <MypostsContainer/>
        </div>

    );
}
