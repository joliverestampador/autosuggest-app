import React from 'react';
import PropTypes from 'prop-types';
import noImage from '../../../images/no-image-available.png';
import { Image, Row, Col, Card, Container, Button } from 'react-bootstrap';
import '../Watchlist.scss';

const { Body, Title, Text, Link, Subtitle} = Card;

const WatchlistItem = ({ item, onClick, onClose }) => {
    const { score, show = {}, isStrikeThru = false } = item;
    const { image, name, url, summary, id } = show;

    const strikeThru = isStrikeThru ? 'strike-thru' : '';
    const imageUrl = image ? image.medium : noImage;

    return (
        <Container
            className={`watchlist-item my-2 ${strikeThru}`}
            onClick={() => onClick(id, !isStrikeThru)}>
            <Row>
                <Col sm={2} className="image-container">
                    <Image src={imageUrl} alt={name} />
                </Col>
                <Col>
                    <Card className="content-container">
                        <Body>
                            <Title><Link href={url}>{name}</Link></Title>
                            <Subtitle className="mb-2 text-muted">{`Critics score: ${score} %`}</Subtitle>
                            <Text className="summary" dangerouslySetInnerHTML={{ __html: summary }} />
                        </Body>
                    </Card>
                </Col>
            </Row>
            <Button className="close-button" variant="danger" onClick={() => onClose(id)}>&times;</Button>
        </Container>
    );
};

WatchlistItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default WatchlistItem;
