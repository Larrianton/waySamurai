import React, {ChangeEvent} from 'react';
import s from './Profile.module.css'

type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activatedMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivatedMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.target.value
        })
    }
    componentDidUpdate(prevState:{status:string} ,prevProps:ProfileStatusPropsType) {
        if (prevState.status !== this.state.status){
            this.setState({
                status:this.state.status
            })
        }
    }

    render() {
        return (
            <div className={s.content}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activatedMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivatedMode.bind(this)} onChange={this.onStatusChange}
                           onKeyPress={(e) => {
                               if (e.key === "Enter") {
                                   this.deactivatedMode.bind(this)()
                               }
                           }}/>
                </div>
                }
            </div>
        )
    };
}