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
                <UserClass name={"first child"}/>
                <UserClass name={"second child"}/>
                <UserClass name={"third child"}/>
            </div>
        )
    }
}
export default User;