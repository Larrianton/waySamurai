import React from 'react';
import {MypostsContainer} from "./Myposts/MypostsContainer";
import {ProfileInfo} from "./ProfileInfo";


export const Profile: React.FC<any> = () => {


    return (
        <div>
            <ProfileInfo/>
            <MypostsContainer/>
        </div>

    );
}
