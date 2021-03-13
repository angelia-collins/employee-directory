import React from "react";
import UserRow from "./UserRow";

const UserTable = (props) => {
    return (
        <table style={{width:"100%"}}>
        <tr>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Name</th>
          <th>Picture</th>
        </tr>
        {props.users.map((user) => (
            <UserRow user={user}/>
        ))}
      </table>
    )
}

export default UserTable;