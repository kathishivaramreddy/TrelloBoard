import React from 'react';
import {AddItem} from "./AddItem";

export class Lists extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="todo" onDragOver={(e)=>this.props.onDragOver(e)}
                 onDrop={(e)=>this.props.onDrop(e,this.props.status)}>
                <span>{this.props.title}</span>
                {this.props.items}
                <br/>
                {this.props.status==="to-do" &&<AddItem updateItem={this.props.updateItem}/>}
            </div>
        )
    }
}