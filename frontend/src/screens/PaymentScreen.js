import React, { useState } from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
    //pull address from local storage
    //to redirect in case of no shipping address
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        //console.log('shipped😂')
        dispatch(savePaymentMethod( paymentMethod ))
        history.push('/placeorder')
    }
     
    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Method</Form.Label>
                

                <Col>
                    <Form.Check type='radio' label='Paypal or Credit Card'
                    id='PayPal' name='paymentMethod' checked
                    onChange={(e) => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                </Col>

                <Col>
                    <Form.Check type='radio' label='Paytm'
                    id='Paytm' name='paymentMethod' 
                    onChange={(e) => setPaymentMethod(e.target.value)}>
                    </Form.Check>
                </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Save and Continue
                </Button>
            </Form>

        </FormContainer>
    )
}

export default PaymentScreen
