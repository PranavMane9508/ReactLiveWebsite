import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Contact() {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: ''
    });
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}, My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say is ${data.message}`);
    };
    const inputEvent = (event) => {
        const { value, name } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
        console.log(data);
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <Container className="contactdiv">
                <Row>
                    <Col md='6' className="col-10 mx-auto">
                        <Form onSubmit={formSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control name='fullname' value={data.fullname} onChange={inputEvent} type="text" placeholder="Enter Your Full Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control name='phone' value={data.phone} onChange={inputEvent} type="number" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' value={data.email} onChange={inputEvent} type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control name='message' value={data.message} onChange={inputEvent} as="textarea" rows={3} />
                            </Form.Group>
                            <Button type="submit" variant="outline-primary">Submit form</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}