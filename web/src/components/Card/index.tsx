import React from 'react';
import { Card as RCard, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";

interface IProps {
  title: string;
  description: string;
}

const Card: React.FC<IProps> = ({title, description}) => {
  return (
    <RCard>
      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
          {description}
        </CardText>
      </CardBody>
    </RCard>
  )
}

export default Card;