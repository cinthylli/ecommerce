import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import ButtonAnimated from './Button'
import Modal from './Modal'
const CardExampleImageCard = ({ product, category, pointsLeft, cost }) => (
    <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Content>
            <Card.Header>{product}Product Cinthya</Card.Header>
            <Card.Meta>{category}Categoria</Card.Meta>
            <ButtonAnimated amount={pointsLeft} frontMessage='Need' backMessage='Bring them!' />
            <Modal
                frontMessageButtom="Just"
                cost="23566"
                backMessageButtom="Redeem it!"
                title="SUCESS!"
                content="Your purchase was successfully approved "
                buttomText="Thanks"
            />
        </Card.Content>
        <Card.Content extra>

        </Card.Content>
    </Card>
)

export default CardExampleImageCard