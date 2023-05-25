import React from "react";

class classcomp extends React.Component{
    render(){
        return(
            <div className="class">
                <h1>this is created using class component</h1>
                <p>this is done by using external css</p>
                <p style={{color: "blue"}}>this is using inline css</p>
            </div>
        )
    }
}

export default classcomp;