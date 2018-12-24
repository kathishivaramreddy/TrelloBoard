import React from 'react';
import {NewList} from "./NewList";
import {Lists} from './Lists';
import {AddNewList} from "./AddNewList";
import './TrelloBoard.css';

export class TrelloBoard extends React.Component{

    constructor(props){
        super(props)
        this.state ={ items: [
            {title:'item1',description:'company website redesign',status:'todo'},
            {title:'item2',description:'mobile app login',status:'todo'},
            {title:'item3',description:'onboarding',status:'inprogress'}
            ],
            addList:{add:false,title:''},
        }

        this.onDragStart = this.onDragStart.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.updateItems = this.updateItems.bind(this);
        this.addNewList = this.addNewList.bind(this);
    }

    updateItems = (event) => {

        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        this.setState( (presentState) => {
            return{
                items:presentState.items.concat([{title:title,description:description,status:"todo"}])
            }
        })
    }

    addNewList = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        this.setState({addList:{add:true,title:title}})
    }
    onDragStart = (event,title) => {
        event.dataTransfer.setData("title",title)
    }

    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event,status) => {

        let title = event.dataTransfer.getData("title");
        let items = this.state.items.filter((item) => {
            if (item.title === title) {
                item.status = status;
            }
            return item;
        });
        this.setState({
            ...this.state,
            items
        });
    }

    render(){

            var items = {
                todo:[],
                inprogress:[],
            }

            this.state.items.forEach( (item) =>
            items[item.status].push(
                <div key={item.title} className="draggable" draggable="true"
                                         onDragStart={(e)=>this.onDragStart(e,item.title)}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
            ))

            const {add,title} = this.state.addList

            return(
                <div >

                    <Lists items={items.todo} title="TO-DO" onDragOver={this.onDragOver} onDrop = {this.onDrop}
                           updateItem={this.updateItems} status="to-do"/>

                    <Lists items={items.inprogress} title="IN-PROGRESS" onDragOver={this.onDragOver} onDrop = {this.onDrop}
                           updateItem={this.updateItems} status="inprogress"/>

                    {add && <NewList title={title} onDragOver={this.onDragOver} onDrop = {this.onDrop}/>}

                    <AddNewList addNewList={this.addNewList}/>

                </div>
            )}
}