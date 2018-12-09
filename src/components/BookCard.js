import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const BookCard = ({title, author, price, image}) => {
    return (
        <div>
            <Card>
                <Image src={image} />
                <Card.Content>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{author}</span>
                    </Card.Meta>
                    {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description> */}
                </Card.Content>
                <Card.Content extra>
                    <a>
                    ₴ {price}
                    </a>
                </Card.Content>
            </Card>
        </div>
    );
};

export default BookCard;