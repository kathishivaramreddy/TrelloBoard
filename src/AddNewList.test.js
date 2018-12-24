import React from 'react';
import {shallow,mount} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import {AddNewList} from './AddNewList';

describe('AddNewList ', () => {

    let callback=jest.fn()
    it('should render a form',() => {
        const wrapper= shallow(<AddNewList/>)
        expect(wrapper.exists('form')).toEqual(true);
    })

    it('should render two input fields', () => {
        const wrapper = shallow(<AddNewList/>)
        expect(wrapper.find('input')).toHaveLength(1);
    })

    it('should call a function on submit' ,() => {
        const wrapper = mount(<AddNewList addNewList={callback}/>)
        wrapper.find('form').simulate('submit')
        expect(callback).toHaveBeenCalled()
    })
})
