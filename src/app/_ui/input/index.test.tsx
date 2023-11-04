import * as React from 'react'
import Input from './index'
import { render, screen } from '@testing-library/react'

describe('Input', () => {
  test('Input props', () => {
    render(<Input label="label" name="name" />)

    const element = screen.getByLabelText('label')
    expect(element).toBeInTheDocument()
  })
})
