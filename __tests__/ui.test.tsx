import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
// Atoms
import TextInput from '../ui/atoms/TextInput'
import PasswordInput from '../ui/atoms/PasswordInput'
import SubmitButton from '../ui/atoms/SubmitButton'
// Molecules
import LoginForm from '../ui/molecules/LoginForm'
import { Labels, Placeholders, TestIDs } from '../pages/core/configs'

const testObject: {[key: string]: any} = {
  isTextInput: (screen) => screen.getByPlaceholderText(Placeholders.TEXT_INPUT),
  isPasswordInput: (screen) => screen.getByPlaceholderText(Placeholders.PASSWORD_INPUT),
  isSubmitButton: (screen) => screen.getByText(Labels.SUBMIT),
  isErrorField: (screen) => screen.getByTestId(TestIDs.ERROR)
}

const makeLogin = (length: number) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

const expectation =  (element) => expect(element).toBeInTheDocument()

describe('UI inputs must render properly', () => {
  it('renders a text input', () => {
    render(<TextInput onLoginEnter={(value) => value}/>)

    const input = testObject.isTextInput(screen)

    expectation(testObject.isTextInput(screen))

    fireEvent.change(input, { target: { value: 'тест' } })
    expect(input).toHaveDisplayValue('')

    const generatedLogin = makeLogin(101)

    fireEvent.change(input, { target: { value: generatedLogin } })
    expect(input).toHaveDisplayValue('')
  })

  it('renders a password input', () => {
    render(<PasswordInput onPasswordEnter={(value) => value}/>)
    const input = testObject.isPasswordInput(screen)

    expectation(input)

    fireEvent.change(input, { target: { value: 'тест' } })
    expect(input).toHaveDisplayValue('')

    const generatedLogin = makeLogin(51)

    fireEvent.change(input, { target: { value: generatedLogin } })
    expect(input).toHaveDisplayValue('')
  })

  it('renders a submit button', () => {
    render(<SubmitButton />)
    expectation(testObject.isSubmitButton(screen))
  })
})

describe('Form should be rendered properly', () => {
  it('renders login form', () => {
    render(<LoginForm />)
    const testKeys = Object.keys(testObject)
    if(Array.isArray(testKeys) && testKeys.length > 0) {
      testKeys.forEach((test: string) => {
        expectation(testObject[test](screen))
      })
    }
  })
})