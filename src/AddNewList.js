import React from 'react';

export class AddNewList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form onSubmit={ this.props.addNewList }>
                    <input type="text" name="title" placeholder="Enter Title"/>
                    <button type="submit">Add List</button>
                </form>
            </div>
        )
    }
}
