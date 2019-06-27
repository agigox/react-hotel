import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Header } from "../components/Header";

describe('should test App component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('contains header componenets', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains(<Header />)).to.equal(true);
    });
    test('contains 4 routes', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.container').children()).to.have.lengthOf(4);
    });
});