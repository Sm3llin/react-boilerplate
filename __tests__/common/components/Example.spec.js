import React from 'react'
import { fromJS } from 'immutable'
import Enzyme, { shallow } from 'enzyme'

import { Example } from  '../../../src/js/common/components/Example'

const fixture = {
  example: {
    result: fromJS({
      testing: 'data',
    }),
  },
};

const motdFixture = {
  example: {
    result: fromJS({
      testing: 'data',
    }),
    motd: "Hello World!"
  },
};

describe('ExampleView', () => {
  it('should render a blank div without data', () => {
    const el = shallow(<Example />)

    expect(el.length).toEqual(1)
    expect(el.find('.exampleOutput').length).toEqual(0)
  })

  it('should render with correct data', () => {
    const el = shallow(
      <Example {...fixture} />
    )

    expect(el.length).toEqual(1)
    expect(el.find('.exampleOutput').length).toEqual(1)
    expect(el.find('h1').find('span').text()).toEqual('Started')
  })

  it('should render a default motd message when none is present', () => {
    const el = shallow(
      <Example {...fixture} />
    )

    expect(el.find('h1').find('span').text()).toEqual('Started')
  })

  it('should render the motd if store contains a string', () => {
    const el = shallow(
      <Example {...motdFixture} />
    )

    expect(el.find('h1').find('span').text()).toEqual(motdFixture.example.motd)
  })
})
