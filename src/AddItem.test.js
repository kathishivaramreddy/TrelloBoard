import React from 'react';
import {shallow,mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {AddItem} from './AddItem';

describe('AddItem ', () => {

    let callback=jest.fn()
    it('should render a form',() => {
        const wrapper= shallow(<AddItem/>)
        expect(wrapper.exists('form')).toEqual(true);
    })

    it('should render two input fields', () => {
        const wrapper = shallow(<AddItem/>)
        expect(wrapper.find('input')).toHaveLength(2);
    })

    it('should call a function on submit' ,() => {
        const wrapper = mount(<AddItem updateItem={callback}/>)
        wrapper.find('form').simulate('submit')
        expect(callback).toHaveBeenCalled()
        })
})
