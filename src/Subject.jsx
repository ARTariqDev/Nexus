import { Card, CardBody, Image, Heading, Button } from '@chakra-ui/react';
import './App.css';

function Subject({ name, path, onClick }) {
  return (
    <div style={{ padding: '0.75em', backgroundColor: '#000000' }}>
      <Card
        maxW="sm" // Made the card smaller
        height="8em"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderColor="#ffaa00"
        mx="auto"
        bg="#111111"
        shadow="lg"
        transition="transform 0.3s ease"
        _hover={{ transform: 'scale(1.05)', shadow: '2xl' }}
        position="relative"
        onClick={onClick}
      >
        {/* Card Image */}
        <Image
          src={path}
          alt={name}
          width="100%"
          height="50%"
          objectFit="cover"
          opacity="0.75" // Reduced visibility
        />

        {/* Translucent CardBody overlay */}
        <CardBody
          bg="rgba(0, 0, 0, 0.6)" // Semi-transparent overlay
          position="absolute"
          bottom="0"
          width="100%"
          textAlign="center"
          padding="1em"
        >
          <Heading
            size="18em" // Made text fit better
            fontFamily="monospace"
            color="#ffaa00"
            mb="0.1em"
            backgroundColor="#1111"
          >
            {name}
          </Heading>
          <Button
            onClick={onClick}
            mt="0.5em"
            bg="#111111"
            border="1px solid #ffaa00"
            color="#ffaa00"
            _hover={{ bg: '#ffaa00', color: '#111111' }}
            width="100%"
          >
            See Resources →
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Subject;
