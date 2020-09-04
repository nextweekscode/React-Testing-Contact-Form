import React from 'react'
import { render, fireEvent, screen} from '@testing-library/react'
import ContactForm from './ContactForm'

test(' the contact form',  () => {
    render(<ContactForm/>)

    const fnInput = screen.getByLabelText(/first name*/i)
    expect(fnInput).toBeTruthy()
    fireEvent.change(fnInput, {target: {value : 'Ashton'}})

    const lnInput = screen.getByLabelText(/last name*/i)
    expect(lnInput).toBeTruthy()
    fireEvent.change(lnInput, {target : { value: 'Turner'}})

   

})