import React from 'react';
import {shallow} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {TrelloBoard} from './TrelloBoard';

describe('TrelloBoard ', () => {

    it('should render two lists',() => {
        const wrapper= shallow(<TrelloBoard/>)
        expect(wrapper.find('Lists')).toHaveLength(2);
    })
    it('should render AddButton', () => {
        const wrapper = shallow(<TrelloBoard/>)
        expect(wrapper.exists('AddNewList')).toEqual(true);
    })
})
