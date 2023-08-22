import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './RecentAddedBooks.css'

function PopularCard() {
    <h1 className='recentbooks-title'>Testimonials</h1>
    return (
        <div className='recentaddedbooks-container'>
            
            <div className='recentbooks'>
                <div className='images'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{ height: '168px' }} src="https://placehold.jp/150x150.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
    );


}

export default PopularCard;
