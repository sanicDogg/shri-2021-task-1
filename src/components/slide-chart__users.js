import { getScale } from "../helpers";
import React from "react";
import "./slide-chart__users.css";

export default function SlideChartUsers (props) {
    let { users } = props;
    let preparedUsers = users.slice(0, 2);

    return (
        <div className={"slide-chart__users"}>
            {getUsers()}
        </div>
    )

    function getUsers() {
        return preparedUsers.map((user, i) =>
            (
                <div className={"slide-chart__user"} key={i}>
                    <img className={"slide-chart__user-avatar"}
                         src={`assets/images/${getScale(props.resolution)}x/${user.avatar}`}
                         alt={user.name}/>
                    <div className={"slide-chart__user-text"}>
                        <div className={"slide-chart__user-name"}>{user.name}</div>
                        <div className={"slide-chart__user-value"}>{user.valueText}</div>
                    </div>
                </div>
            )
        )
    }
}

