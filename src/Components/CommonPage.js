import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import web from '../Images/img1.svg';

function CommonPage(props) {
    return (
        <>
            <section id="header" className="header" >
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col lg={10}>
                            <Row>
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1> {props.name} <strong className="text-primary" > Technical </strong> </h1>
                                    <h2 className="my-3"> We are the team of talented developer making websites </h2>
                                    <div className="mt-3">
                                        <Button variant="outline-primary" className="btns" >
                                            <NavLink className='mainlinks' to={props.visit}>{props.btnname}</NavLink>
                                        </Button>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="" />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default CommonPage;