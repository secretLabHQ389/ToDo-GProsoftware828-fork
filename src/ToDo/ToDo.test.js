import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FindByTestAttr, checkProps } from '../../Utils';
import ToDo from './ToDo';
import checkPropTypes from 'check-prop-types';

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<ToDo {...props} />);
  return component;
};

describe('ToDo component', () => {
  describe('Initial test render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('Should render', () => {
      const component = FindByTestAttr(wrapper, 'TodoComponent');
      expect(component.length).toBe(1);
    });
  });

  describe('Individual elements exist', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('Should render ToDo title', () => {
      const title = FindByTestAttr(wrapper, 'titles');
      expect(title.length).toBe(1);
    });
    it('Should render ToDo completed click event', () => {
      const clickEvent = FindByTestAttr(wrapper, 'clicker');
      expect(clickEvent.length).toBe(1);
    });
  });

  describe('Nested', () => {
    describe('Checking PropTypes', () => {
      it('Should not throw a warning from Check PropTypes', () => {
        const expectedProps = {
          title: 'Title test'
        };
        const propsErr = checkProps(ToDo, expectedProps);
        expect(propsErr).toBeUndefined();
      });
    });
  });
});
