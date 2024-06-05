import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardBox() {
    return (
        <>
            <Container className='mt-5 text-center'>
                <Row style={{ display: 'flex' }}>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4D10AQFh8irNigSC9w/image-shrink_800/0/1679613047520/ParttimeDataFRBlackjpg?e=2147483647&v=beta&t=sIXbHf7X_GaK97pcNgq8AZtV5SzRXNT_qQ8074WLRwI" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://pbs.twimg.com/media/FEVRuTQX0AM6r-C.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cdn.www.tooshare.com/assets/50ff6dbdfb344add9bee43ea70ef954b_contain_900_400.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>

    );
}

export default CardBox;