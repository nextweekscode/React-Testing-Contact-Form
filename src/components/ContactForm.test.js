import React from 'react'
import { render, fireEvent, screen} from '@testing-library/react'
import ContactForm from './ContactForm'

test(' the contact form',  () => {
    render(<ContactForm/>)

    const fnInput = screen.getByPlaceholderText(/edd/i)
    expect(fnInput).toBeTruthy()
    fireEvent.change(fnInput, {target: {value : 'Ashton'}})

    const lnInput = screen.getByPlaceholderText(/burke/i)
    expect(lnInput).toBeTruthy()
    fireEvent.change(lnInput, {target : { value: 'Turner'}})

    const emInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i)
    expect(emInput).toBeTruthy()
    fireEvent.change(emInput, {target : { value: 'ash.com'}})


   

})