import React from "react";

export class NewList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="todo" onDragOver={(e)=>this.props.onDragOver(e)}
                 onDrop={(e)=>this.props.onDrop(e,'this.props.title')}>
                <span>{this.props.title}</span>
                <br/>
            </div>
        )
    }
}