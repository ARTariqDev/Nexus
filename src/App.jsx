import { ChakraProvider, SimpleGrid, Button, ButtonGroup } from '@chakra-ui/react';
import Subject from './Subject.jsx';
import './App.css';
import { useState, useRef } from 'react';
import mathsImage from './assets/maths.webp';
import FMimage from './assets/FM.png';
import PhysicsImage from './assets/physics.jpeg';
import ChemistryImage from './assets/chemistry.jpeg';
import SATimage from './assets/SAT.png';
import CSimage from './assets/CS.jpeg';
import IslamiyatImage from './assets/islamiyat.png';

function App() {
  const [subject, setSubject] = useState(""); // State to track the selected subject
  const [isGridVisible, setIsGridVisible] = useState(true); // Controls grid visibility
  const [level, setLevel] = useState("A level"); // Default level

  const iframeRef = useRef(null);

  const links = {
    // A Level
    "Maths 9709": "https://e.pcloud.link/publink/show?code=kZH5dPZ9NKnF764i5pecoVAx4XfpHbtgyK7",
    "Further Maths 9231": "https://e.pcloud.link/publink/show?code=kZEByCZEihIUCpG8lYIRql60u7PAh9jY937",
    "Physics 9702": "https://e.pcloud.link/publink/show?code=kZ3BvxZu1TBwjyIfqf317grBfLcAmW0GhGk",
    "Chemistry 9701": "https://drive.google.com/file/d/your-chemistry-link",
    "SAT": "https://e.pcloud.link/publink/show?code=kZ499xZQbnubSRgjDX5vEnckBwFW7FDxByX",
    "Computer Science 9618": "https://e.pcloud.link/publink/show?code=kZvpjCZxYw1P5n1iEp5UiNrtni77jU1aeiy",

    // O Level
    "Maths 4024": "https://e.pcloud.link/publink/show?code=kZ6vKxZDhnyiFQoClL6CV4JusJM80wQkT4k",
    "Islamiyat 2058": "https://e.pcloud.link/publink/show?code=kZzqUxZLPrdz1Q7eL4U9qbyhBA0t84O8OPV",
    "Chemistry 5070": "https://drive.google.com/file/d/your-chemistry-link",
  };

  const handleSubjectClick = (subjectName) => {
    setSubject(subjectName); // Set the selected subject
    setIsGridVisible(false); // Hide the subject grid
    setTimeout(() => {
      iframeRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 200); // Smooth scroll to the iframe
  };

  const handleReturnClick = () => {
    setIsGridVisible(true); // Show the subject grid
    setSubject(""); // Clear the selected subject
  };

  const renderSubjects = () => {
    const subjects = level === "A level" ? [
      { name: "Maths 9709", path: mathsImage },
      { name: "Further Maths 9231", path: FMimage },
      { name: "Physics 9702", path: PhysicsImage },
      { name: "Chemistry 9701", path: ChemistryImage },
      { name: "SAT", path: SATimage },
      { name: "Computer Science 9618", path: CSimage },
    ] : [
      { name: "Maths 4024", path: mathsImage },
      { name: "Islamiyat 2058", path: IslamiyatImage },
      { name: "Chemistry 5070", path: ChemistryImage },
    ];

    return (
      <>
        <ButtonGroup isAttached variant="outline" size="sm" mb={5} backgroundColor={"#111111"}>
          <Button
            onClick={() => setLevel("A level")}
            colorScheme={level === "A level" ? "black" : "gray"}
            backgroundColor={"#111111"}
            borderRadius={"8em"}
            color={level === "A level" ? "#ffaa00" : "#ffaa00"}
          >
            A Level
          </Button>
          <Button
            onClick={() => setLevel("O level")}
            colorScheme={level === "O level" ? "black" : "gray"}
            borderColor="#ffaa00"
            backgroundColor={"#111111"}
            borderRadius={"8em"}
            color={level === "O level" ? "#ffaa00" : "#ffaa00"}
          >
            O Level
          </Button>
        </ButtonGroup>
        <SimpleGrid columns={[1, 2, 3]} spacing={5} style={{backgroundColor : "#000000"}}>
          {subjects.map((sub) => (
            <Subject
              key={sub.name}
              name={sub.name}
              path={sub.path}
              onClick={() => handleSubjectClick(sub.name)}
            />
          ))}
        </SimpleGrid>
      </>
    );
  };

  return (
    <ChakraProvider>
      <div id="App" style={{backgroundColor : "#000000"}}>
        <header style={{ color: 'white', backgroundColor: '#111111', textAlign: 'center', padding: '1em 0' }}>
          <h1 style={{ backgroundColor: "#111111", margin: 0 ,fontSize : '2em'}}>Nexus Learn</h1>
          <h6 style={{ color: 'gray', fontSize: 'medium', backgroundColor: "#111111", margin: 0 }}>
            O/A level Resources at Your Fingertips
          </h6>
        </header>

        {isGridVisible ? (
          renderSubjects()
        ) : (
          <main>
            <button
              onClick={handleReturnClick}
              style={{
                color: "#ffaa00",
                backgroundColor: "#111111",
                border: 'solid black 0.1em',
                fontSize: 'medium',
                padding: '0.5em 1em',
                margin: '1em auto',
                display: 'block',
                borderRadius: '0.5em',
                width: 'fit-content'
              }}
            >
              ↩ Back to Subjects
            </button>
            <iframe
              ref={iframeRef}
              src={links[subject]}
              title={subject}
              allow="autoplay"
              style={{
                width: '95%',
                height: '150vh',
                marginTop: '20px',
                borderRadius: '1em',
                border: 'solid black 0.01em',
                boxShadow: '0px 8px 16px rgba(1, 1, 1, 0.3)',
                display: 'block',
                margin: 'auto',
                backgroundColor : 'gray',
                color : "white"
              }}
            />
          </main>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
