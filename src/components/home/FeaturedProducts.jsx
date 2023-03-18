import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class FeaturedProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center' fluid={true}>
                    <div className='section-title text-center mb-55'>
                        <h2>Featured Products</h2>
                        <p>Our exclusive colleciton.</p>
                    </div>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default FeaturedProducts