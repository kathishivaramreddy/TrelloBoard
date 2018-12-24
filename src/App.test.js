import React from 'react';
import {shallow,mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import App from './App';

describe('App ', () => {

    it('should render trello board',() => {
        const wrapper= shallow(<App/>)
        expect(wrapper.exists('TrelloBoard')).toEqual(true);
    })
})
