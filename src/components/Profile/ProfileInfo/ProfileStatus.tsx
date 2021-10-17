import React, {useState} from 'react';
import s from './Profile.module.css'

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false

    }
    activatedMode() {
        this.setState({
            editMode:true
        })
    }
    deactivatedMode() {
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div className={s.content}>
                    {!this.state.editMode &&
                    <div>
                        <span onDoubleClick = { this.activatedMode.bind(this)}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                <div>
                    <input  onBlur={this.deactivatedMode.bind(this)} value={this.props.status}/>
                </div>
                }

            </div>
        )
    };
}