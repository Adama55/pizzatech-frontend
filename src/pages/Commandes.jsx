import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from "../Layout.jsx";

export default function Commandes() {
    return (
        <div>

            <Container className="mt-4">
                <Row>
                    <Col md={12}>
                        <h1>Ici votre commande</h1>

                    </Col>
                </Row>
                {/* Ajoute d'autres sections ici */}
            </Container>
        </div>
    );
}
