import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
                        <p>Our Exclusive Collection</p>
                    </div>

                    <Row>
                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://burst.shopifycdn.com/photos/profile-of-a-person-in-black-tee.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                                <Card.Body>
                                    <p className="product-name-on-card">Striped Men Hooded Neck Red</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>


                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://burst.shopifycdn.com/photos/person-ruffling-their-hair-portrait.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                                <Card.Body>
                                    <p className="product-name-on-card">Striped Men Round Neck Maroon, Grey</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://burst.shopifycdn.com/photos/teen-fashion-hoodie-with-urban-neon.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                                <Card.Body>
                                    <p className="product-name-on-card">Color Block Men Round Neck Grey</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://burst.shopifycdn.com/photos/moody-image-of-a-person-in-grey-hooded-sweater.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>


                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://burst.shopifycdn.com/photos/urban-mens-fashion-on-young-adult.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://burst.shopifycdn.com/photos/portrait-of-man-in-grey-and-blue.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://burst.shopifycdn.com/photos/black-bag-with-school-supplies-falling-out-of-it.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://burst.shopifycdn.com/photos/a-pile-of-denim-jeans-in-different-shades-of-blue.jpg?width=373&format=pjpg&exif=1&iptc=1" />
                                <Card.Body>
                                    <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
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

export default Collection
