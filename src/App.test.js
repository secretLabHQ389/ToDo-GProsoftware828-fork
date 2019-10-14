import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

export const FindByTestAttr = (component, attr) => {
  const selector = component.find(`[data-test='${attr}']`);
  return selector;
};

describe('App main component', () => {
  describe('Uncompleted list component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it('should render', () => {
      const component = FindByTestAttr(wrapper, 'addItem');
      expect(component.length).toBe(1);
    });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
