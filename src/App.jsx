import { ChakraProvider, SimpleGrid, Button } from '@chakra-ui/react';
import Subject from './Subject.jsx';
import './App.css';
import { useState, useRef } from 'react';
import mathsImage from './assets/maths.webp';
import FMimage from './assets/FM.png';
import PhysicsImage from './assets/physics.jpeg';
import ChemistryImage from './assets/chemistry.jpeg';
import SATimage from './assets/SAT.png';
import CSimage from './assets/CS.jpeg';

function App() {
  // State to track the selected subject and grid visibility
  const [subject, setSubject] = useState("");
  const [isGridVisible, setIsGridVisible] = useState(true); // Controls grid visibility

  // Ref to scroll to the iframe
  const iframeRef = useRef(null);

  // Array of Google Drive links corresponding to each subject
  const links = {
    "Maths": "https://e.pcloud.link/publink/show?code=kZH5dPZ9NKnF764i5pecoVAx4XfpHbtgyK7",
    "Further Maths": "https://e.pcloud.link/publink/show?code=kZEByCZEihIUCpG8lYIRql60u7PAh9jY937",
    "Physics": "https://drive.google.com/file/d/your-physics-link",
    "Chemistry": "https://drive.google.com/file/d/your-chemistry-link",
    "Biology": "https://drive.google.com/file/d/your-biology-link",
    "Computer Science": "https://e.pcloud.link/publink/show?code=kZvpjCZxYw1P5n1iEp5UiNrtni77jU1aeiy"
  };

  // Function to handle subject card click
  const handleSubjectClick = (subjectName) => {
    setSubject(subjectName);
    setIsGridVisible(false); // Hide the grid
    setTimeout(() => {
      iframeRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 200); // Delay to ensure iframe is rendered before scrolling
  };

  // Function to handle returning to the subjects grid
  const handleReturnClick = () => {
    setIsGridVisible(true); // Show the grid
    setSubject(""); // Clear the subject
  };

  return (
    <ChakraProvider>
      <div id="App">
        <header style={{color: 'white',backgroundColor : 'black'}}>
          Nexus Learn
          <h6 style={{color: 'black',fontSize : 'medium'}} >A level Resources at your fingertips</h6>
        </header>
        
        {isGridVisible ? (
          <>
            <SimpleGrid columns={[1, 2, 3]} spacing={1}>
              <Subject name="Maths 9709" path={mathsImage} onClick={() => handleSubjectClick("Maths")} />
              <Subject name="Further Maths 9231" path={FMimage} onClick={() => handleSubjectClick("Further Maths")} />
              <Subject name="Physics 9702" path={PhysicsImage} onClick={() => handleSubjectClick("Physics")} />
              <Subject name="Chemistry 9701" path={ChemistryImage} onClick={() => handleSubjectClick("Chemistry")} />
              <Subject name="SAT" path={SATimage} onClick={() => handleSubjectClick("SAT")} />
              <Subject name="Computer Science 9618" path={CSimage} onClick={() => handleSubjectClick("Computer Science")} />
            </SimpleGrid>
          </>
        ) : (
          <main>
            <Button
              onClick={handleReturnClick}
              marginTop="20px"
              color="black"
              colorScheme="grey"
              size="lg"
            >
              Return to Subjects
            </Button>
            <iframe
              ref={iframeRef}
              src={links[subject]}
              title={subject}
              allow="autoplay"
              style={{ width: '90%', height: '100vh', marginTop: '20px' ,borderRadius: '1em',border: 'solid black 0.01em',boxShadow: '0px 8px 16px rgba(1, 1, 1, 0.3)'}}
            />
          </main>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
