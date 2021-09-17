import React from 'react';
import { Image, Row, Col, Card, Container } from 'react-bootstrap';
import '../Watchlist.scss';

const { Body, Title, Text, Link, Subtitle} = Card;
const WatchlistItem = ({ item }) => {
    const { score, show = {} } = item;
    const { image = {}, name, url, summary } = show;
    return (
        <Container className="watchlist-item my-2">
            <Row>
                <Col sm={2} className="image-container">
                    <Image src={image.medium} alt={name} />
                </Col>
                <Col>
                    <Card className="content-container">
                        <Body>
                            <Title> <Link href={url}>{name}</Link></Title>
                            <Subtitle className="mb-2 text-muted">Critics score: {score} %</Subtitle>
                            <Text className="summary" dangerouslySetInnerHTML={{ __html: summary }} />
                        </Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default WatchlistItem;
