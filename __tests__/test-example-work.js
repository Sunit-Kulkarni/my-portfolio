import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { extname } from 'path';
Enzyme.configure({ adapter: new Adapter() });

const myWork = [
  {
    title: 'Work Example',
    image: {
      desc: 'example screenshot of a project involving chemistry',
      src: 'images/example1.png',
      comment: ''
    }
  },
  {
    title: 'Work Example Portfolio',
    image: {
      desc: 'example screenshot of a project involving chemistry',
      src: 'images/example2.png',
      comment: ''
    }
  }
];

describe('ExampleWork Component', () => {
  let component = shallow(<ExampleWork work={myWork} />);
  it('should be a section element', () => {
    expect(component.type()).toEqual('section');
  });

  it('Should contain as many children as work examples', () => {
    expect(component.find('ExampleWorkBubble').length).toEqual(myWork.length);
  });
});

describe('ExampleWorkBubble component', () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]} />);
  let images = component.find('img');

  it('Should contain a single image element', () => {
    expect(images.length).toEqual(1);
  });

  it('Should have set img src correctly', () => {
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  });
});
