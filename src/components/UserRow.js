import React from "react";

const UserRow = (props) => {
    return (
        <tr>
            <td>{props.user.cell}</td>
            <td>{props.user.email}</td>
            <td>{props.user.name.first} {props.user.name.last}</td>
            <td>
                <img
                    src={props.user.picture.thumbnail}
                    alt="Profile Picture" 
                    className="profilePicture"/>
            </td>
        </tr>
    )
}

export default UserRow;