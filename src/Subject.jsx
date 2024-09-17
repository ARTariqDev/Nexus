import { Card, CardBody, Image, Heading } from '@chakra-ui/react';
import './App.css';

function Subject({ name, path, onClick }) {
  return (
    <div style={{"padding":"0.5em"}} >
      <Card
        maxW="xs"
        borderWidth="0.01em"
        borderRadius="lg"
        overflow="hidden"
        borderColor="#1B5299"
        marginLeft="auto"
        marginRight="auto"
        height="100%"
        className="Card"  // Apply the .Card class here
      >
        <Image src={path} alt={name} />

        <CardBody >
          <Heading size="lg" textAlign="center" marginTop="-0.3em">{name}</Heading>
          <button onClick={onClick} >See Resources →</button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Subject;
