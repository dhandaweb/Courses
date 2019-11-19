import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import 'babel-polyfill'; // allow es6+ features support

Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;

/**
 * Get rids of the missing requestAnimationFrame polyfill warning. (https://reactjs.org/docs/javascript-environment-requirements.html)
 */
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};


