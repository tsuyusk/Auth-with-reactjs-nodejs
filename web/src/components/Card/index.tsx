import React from 'react';
import { CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import { RCard } from "./styles";

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