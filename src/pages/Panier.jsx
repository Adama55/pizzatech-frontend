import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from "../Layout.jsx";

export default function Panier() {
    return (
        <div>

            <Container className="mt-4">
                <Row>
                    <Col md={12}>
                        <h1>Ici votre Pannier</h1>

                    </Col>
                </Row>

            </Container>
        </div>
    );
}
