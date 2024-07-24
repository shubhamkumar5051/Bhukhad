import React from "react";

class UserClass extends React.Component{

    constructor(props)
    {
        super(props);
       
        console.log(this.props.name +" constructor");

        // making state variable

        this.state= {
            count : 0,
            count1 : 1
        }
    }

    componentDidMount()
    {
     console.log(this.props.name +" Mounting");
    }

    render()
    {
        console.log(this.props.name+" render child");
        const {name, location} = this.props;
        const {count, count1} = this.state;
        return(
            <div>
                <h1> name : {name}</h1>
                <h2>{location}</h2>
                <h3>
                    Count : {this.state.count}  
                    <button onClick={
                        () =>{
                           this.setState({
                             count:count+1,
                           })
                        }
                    }>
                        click me
                    </button>
                </h3>
            </div>
        )
    }
}

export default UserClass;