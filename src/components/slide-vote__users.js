import { getScale } from "../helpers";
import React, { useState } from "react";
import "./slide-vote__users.css";
import { isOrientationPortrait } from "../helpers";

let selectedUserEmoji = "👍";

export default function SlideVoteUsers (props) {
    let { users, selectedUserId, offset } = props.data;
    let { resolution } = props;
    let isPortrait = isOrientationPortrait(resolution.orientation);
    let scale = getScale(resolution);
    let topBtnActive = false, bottomBtnActive = false;

    let [state, setState] = useState({});
    let nextPageUserId, prevPageUserId;

    const handleClickTop = (e) => {
        setState({
            action: "update",
            params: {
                alias: "vote",
                data: {
                    offset: prevPageUserId
                }
            }
        })
    }

    const handleClickBottom = (e) => {
        setState({
            action: "update",
            params: {
                alias: "vote",
                data: {
                    offset: nextPageUserId
                }
            }
        })
    }

    return (
        <div className={"slide-vote__users"}>
            {getUsers(users)}
            <div className={topBtnActive ? "vote__top-btn_active" : "vote__top-btn"}
                 data-action={state.action || ""}
                 data-params={JSON.stringify(state.params) || ""}
                 onClick={handleClickTop} />
            <div className={bottomBtnActive ? "vote__bottom-btn_active" : "vote__bottom-btn"}
                 data-action={state.action || ""}
                 data-params={JSON.stringify(state.params) || ""}
                 onClick={handleClickBottom} />
        </div>
    )

    function getUsers(users) {
        let preparedUsers = prepareUsers(users);

        return preparedUsers.map((user, i) => {
            let e = "";
            if (user.id === selectedUserId && i !== 0) e = selectedUserEmoji;
            return (
                <User data={user} index={i+1} scale={scale} emoji={e} key={i} />
            )
        });
    }

    function prepareUsers(users) {
        let offsetIndex = 0;
        if (offset)
            users.forEach((item, i) => {
                if (item.id === offset) offsetIndex = i;
            });
        let usersCount = isPortrait ? 8 : 6;

        let preparedUsers = users.slice(offsetIndex, offsetIndex + usersCount);
        let tempUser = users[offsetIndex + usersCount]; // nextPageUser
        nextPageUserId = tempUser ? tempUser.id : 0;
        tempUser = users[offsetIndex - usersCount]; // prevPageUser
        prevPageUserId = tempUser ? tempUser.id : 0;
        if (!prevPageUserId) prevPageUserId = users[0].id;
        if (preparedUsers[0].id === users[0].id) prevPageUserId = 0;

        if (nextPageUserId) bottomBtnActive = true;
        if (prevPageUserId) topBtnActive = true;

        if (preparedUsers.length < usersCount)
            for (let i = 0; i < usersCount + 1 - preparedUsers.length; i++) {
                preparedUsers.push({id: "empty"})
            }
        return preparedUsers;
    }
}

class User extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    handleClick = (e) => {
        this.setState({
            action: "update",
            params: {
                alias: "leaders",
                data: {
                    selectedUserId: this.props.data.id
                }
            }
        })
    }

    render() {
        let className = "vote__user";
        if (this.props.emoji === selectedUserEmoji) {
            className += "_selected";
        }
        if (this.props.data.id === "empty") {
            return <div className={`vote__user-empty vote__user-${this.props.index}`} />
        }
        return (
            <div className={`${className} vote__user-${this.props.index}`} onClick={this.handleClick}
                 data-action={this.state.action || ""}
                 data-params={JSON.stringify(this.state.params) || ""}>
                <span className={"vote__user-emoji"}>{this.props.emoji}</span>
                <img className={"vote__user-avatar"}
                     src={`assets/images/${this.props.scale}x/${this.props.data.avatar}`}
                     alt={this.props.data.name}/>
                <div className={"vote__user-name"}>{this.props.data.name}</div>
            </div>
        )
    }
}