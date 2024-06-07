import React from "react";
import { Button, Card, NavLink } from "react-bootstrap";

export default function Cards(props) {
    return (
        <div className="col-md-4 col-10 mx-auto">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgsrc} />
                <Card.Body>
                    <Card.Title>{props.text}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">
                        <NavLink to=''>Go Somewere</NavLink>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}