import React from 'react';

export class TrelloBoard extends React.Component{

    constructor(props){
        super(props)
        this.state = [
            {title:'low',description:'company website redesign'},
            {title:'med',descrption:'mobile app login'},
            {title:'high',description:'onboarding'}
        ]}


        render(){
            const listItems = this.state.map(item => <div>
                {item.title}
                {item.description}
            </div>)

            return(
                listItems
            )
        }
}