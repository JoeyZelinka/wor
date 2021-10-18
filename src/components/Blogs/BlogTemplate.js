import React from 'react'
import '../Blogs/BlogTemplate.css'
import { Container, Col, Row } from 'react-bootstrap'
export default function BlogTemplate() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="placeholderblog">
                            <div className="blogtitle">
                                <h1>placeholder</h1>
                                <h2>placeholder</h2>
                                <div className="byline">placeholder</div>
                                <p></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
