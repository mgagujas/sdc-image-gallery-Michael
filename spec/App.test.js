import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import toJson from 'enzyme-to-json';
// import PhotoGallery from '../client/src/PhotoGallery';


describe('PhotoGallery', () => {
  it('should exist', () => {
    const tree = shallow(<PhotoGallery />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});

test('Fake Test', () => {
  expect(true).toBeTruthy();
});