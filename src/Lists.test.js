import React from 'react';
import {shallow,mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {Lists} from './Lists';

describe('Lists ', () => {

    it('should render Add Button if status is todo' ,() => {
        const wrapper = mount(<Lists status="to-do"/>)
        expect(wrapper.exists('AddItem')).toEqual(true)
    })
})
