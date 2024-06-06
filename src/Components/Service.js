import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "./Cards";
import Sdata from "./Sdata";

export default function Service() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Services </h1>
            </div>
            <Container fluid className="mb-5" >
                <Row>
                    <Col xl='10' className="mx-auto">
                        <Row className="gy-4">
                            { Sdata.map((data,index) => {
                                return (
                                    <Cards
                                    imgsrc={data.imgsrc}
                                    text={data.title}
                                    key={index} />
                                )
                            }) }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}