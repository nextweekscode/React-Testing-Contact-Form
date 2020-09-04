import React from 'react'
import { render, fireEvent, screen} from '@testing-library/react'
import ContactForm from './ContactForm'

test(' the contact form',  () => {
    const { container} = render(<ContactForm/>)


    const fnInput = screen.getByPlaceholderText(/edd/i)
    const lnInput = screen.getByPlaceholderText(/burke/i)
    const emInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
    const msgInput = screen.getByPlaceholderText(/enter message here.../i)
    const subBtn = container.querySelector("input[type=submit]")

    expect(fnInput).toBeTruthy()
    expect(lnInput).toBeTruthy()
    expect(emInput).toBeTruthy()
    expect(msgInput).toBeTruthy()
    expect(subBtn).toBeTruthy()
    
    fireEvent.change(fnInput, {target: {value : 'Ashton'}})
    fireEvent.change(lnInput, {target : { value: 'Turner'}})
})

test('can type in fields and submit form', () => {

})