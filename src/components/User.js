import React from "react";
import UserClass from "./UserClass";

class User extends React.Component{
    constructor(props)
    {
        super(props);
        console.log("parent constructor");

    }

    componentDidMount()
    {
        console.log("parent mount");
    }
    render()
    {
        console.log("parent render");
        return (
            <div>
                <h1>hello</h1>
                <UserClass/>
            </div>
        )
    }
}
export default User;