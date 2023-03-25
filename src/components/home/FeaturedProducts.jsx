import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                        <Col className="p-1" key={1} xl={2} lg={2} sm={4} xs={6}>
                            <Link to="/productdetails">
                                <Card className='image-box card'>
                                    <img className="center" src="https://burst.shopifycdn.com/photos/grooms-prep-kit-for-wedding.jpg?width=925&format=pjpg&exif=1&iptc=1" alt="product-image" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Watch for groom</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className="center" src="https://burst.shopifycdn.com/photos/gemstone-necklace.jpg?width=925&format=pjpg&exif=1&iptc=1" alt="product-image" />
                                <Card.Body>
                                    <p className="product-name-on-card">Watch for groom</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className="center" src="https://burst.shopifycdn.com/photos/gold-ring-with-white-dimonds-and-a-large-stone.jpg?width=373&format=pjpg&exif=1&iptc=1" alt="product-image" />
                                <Card.Body>
                                    <p className="product-name-on-card">Watch for groom</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className="center" src="https://burst.shopifycdn.com/photos/slow-fashion-coat.jpg?width=373&format=pjpg&exif=1&iptc=1" alt="product-image" />
                                <Card.Body>
                                    <p className="product-name-on-card">Watch for groom</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className="center" src="https://burst.shopifycdn.com/photos/black-and-white-sneakers-against-purple-and-white.jpg?width=373&format=pjpg&exif=1&iptc=1" alt="product-image" />
                                <Card.Body>
                                    <p className="product-name-on-card">Watch for groom</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} sm={4} xs={6}>
                            <Card className='image-box card'>
                                <img className="center" src="https://burst.shopifycdn.com/photos/beauty-set.jpg?width=373&format=pjpg&exif=1&iptc=1" alt="product-image" />
                                <Card.Body>
                                    <p className="product-name-on-card">Watch for groom</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default FeaturedProducts