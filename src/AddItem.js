import React from "react";

export class AddItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <div>
            <p>Add Item</p>
            <form className="form1" onSubmit={ this.props.updateItem }>
                <input type="text" name="title" placeholder="Enter Title"/> <br/>

                <input type="text" name="description" placeholder="Enter Desription"/><br/>

                <button type="submit"> +</button>
            </form>
        </div>
    )}
}
