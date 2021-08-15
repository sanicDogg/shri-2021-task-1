import React from "react";
import './podium.css';
import { getScale } from "../helpers";

let selectedUserEmoji = "👍";

export default function Podium(props) {
    let { users, emoji, selectedUserId } = props.data;
    let { resolution } = props;
    let scale = getScale(resolution);

    return (
        <div className={"podium"}>
            {getAllUsers(users)}
        </div>
    )

    function getAllUsers(users) {
        let preparedUsers = Array.from(users);
        preparedUsers.splice(5);

        // Помещаем выбранного пользователя на 5 место
        users.forEach((user, i) => {
            if (user.id === selectedUserId && i + 1 > 5) {
                preparedUsers[4] = user;
            }
        });

        return preparedUsers.map((user, i) => {
            let e = i === 0 ? emoji : "";
            if (user.id === selectedUserId && i !== 0) e = selectedUserEmoji;
            return (
                <div className={"podium__leader"} key={i+1}>
                    <User data={user} index={i+1} scale={scale} emoji={e}/>
                    <Grade index={i+1}/>
                </div> )
        });
    }
}

class User extends React.Component {
    render() {
        let className = "podium__user";
        if (this.props.emoji === selectedUserEmoji)
            className += "_selected";
        return (
            <div className={`${className} podium__user-${this.props.index}`}>
                <span className={"podium__leader-emoji"}>{this.props.emoji}</span>
                <img className={"podium__leader-avatar"}
                     src={`assets/images/${this.props.scale}x/${this.props.data.avatar}`}
                     alt={this.props.data.name}/>
                <div className={"podium__leader-name"}>{this.props.data.name}</div>
                <div className={"podium__leader-score"}>{this.props.data.valueText}</div>
            </div>
        )
    }
}

class Grade extends React.Component {
    render() {
        return (
            <div className={"podium__grade-"+this.props.index}>
                <div className={"podium__text-"+this.props.index}>{this.props.index}</div>
            </div>
        )
    }
}
