import { Card, CardBody, Image, Heading } from '@chakra-ui/react';
import './App.css'

function Subject({ name, path, onClick }) {
  return (
    <div id="Card" onClick={onClick}>
      <Card maxW="xs" borderWidth="0.01em" borderRadius="lg" overflow="hidden" borderColor="#1B5299" marginLeft="auto" marginRight="auto" height="100%" >
        <Image src={path} alt={name} />

        <CardBody>
          <Heading size="lg" textAlign="center" marginTop="-0.3em">{name}</Heading>
        </CardBody>
      </Card>
    </div>
  );
}

export default Subject;
