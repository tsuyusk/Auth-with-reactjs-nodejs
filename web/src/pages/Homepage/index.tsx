import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input, Button } from "reactstrap";

import { Container, Content, Form, CardDeck } from "./styles";
import Card from '../../components/Card';
import { useAuth } from '../../context/AuthContext';

interface ICardData {
  title: string;
  description: string;
}

const Homepage: React.FC = () => {
  const { signOff } = useAuth();
  const [cardData, setCardData] = useState<ICardData>({title: "", description: ""})
  const [cards, setCards] = useState<ICardData[]>([]);

  function handleAddCard(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (cardData.title.trim() !== "" && cardData.description.trim() !== "") {
      setCards([...cards, cardData]);
      setCardData({title: "", description: ""});
    }
  }
  function handleSignOff() {
    signOff();
  }
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setCardData({...cardData, [event.target.name]: event.target.value});
  }
  return (
    <Container>
      <Content>
        <h1>You are logged!</h1>
        <br />
        <Form onSubmit={handleAddCard}>
          <Input
          name="title"
          value={cardData.title}
          onChange={handleInputChange}
          placeholder="Title"
          />
          <br />
          <Input
          name="description"
          value={cardData.description}
          onChange={handleInputChange}
          placeholder="Description"
          />
          <br />
          <Button color="primary" type="submit">Add card</Button>
        </Form>
        <br />
        <CardDeck>
          {cards.map((card, id) => <Card key={id} title={card.title} description={card.description}/>)}
        </CardDeck>
        <br />
        <div onClick={handleSignOff}>
          <h4 role="button" className="text-primary">Sign off</h4>
        </div>
      </Content>
    </Container>
  );
}

export default Homepage;