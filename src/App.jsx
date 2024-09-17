import { ChakraProvider, SimpleGrid } from '@chakra-ui/react';
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
  // State to track the selected subject
  const [subject, setSubject] = useState("");
  
  // Ref to scroll to the iframe
  const iframeRef = useRef(null);

  // Array of Google Drive links corresponding to each subject
  const links = {
    "Maths": "https://e.pcloud.link/publink/show?code=kZH5dPZ9NKnF764i5pecoVAx4XfpHbtgyK7",
    "Further Maths": "https://drive.google.com/file/d/your-further-maths-link",
    "Physics": "https://drive.google.com/file/d/your-physics-link",
    "Chemistry": "https://drive.google.com/file/d/your-chemistry-link",
    "Biology": "https://drive.google.com/file/d/your-biology-link",
    "Computer Science": "https://drive.google.com/file/d/your-compsci-link"
  };

  // Function to handle subject card click
  const handleSubjectClick = (subjectName) => {
    setSubject(subjectName);
    setTimeout(() => {
      iframeRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 200); // Delay to ensure iframe is rendered before scrolling
  };

  return (
    <ChakraProvider>
      <div id="App">
        <h1>O/A level Resources</h1>
        <h2>Subjects</h2>
        <SimpleGrid columns={[1, 2, 3]} spacing={2}>
          <Subject name="Maths 9709" path={mathsImage} onClick={() => handleSubjectClick("Maths")} />
          <Subject name="Further Maths 9231" path={FMimage} onClick={() => handleSubjectClick("Further Maths")} />
          <Subject name="Physics 9702" path={PhysicsImage} onClick={() => handleSubjectClick("Physics")} />
          <Subject name="Chemistry 9701" path={ChemistryImage} onClick={() => handleSubjectClick("Chemistry")} />
          <Subject name="SAT" path={SATimage} onClick={() => handleSubjectClick("SAT")} />
          <Subject name="Computer Science 9618" path={CSimage} onClick={() => handleSubjectClick("Computer Science")} />
        </SimpleGrid>

        <main>
          <h2>Browse Resources for {subject} </h2>
          {subject && (
            <iframe
              ref={iframeRef}  // Reference to iframe for scrolling
              src={links[subject]}
              title={subject}
              allow="autoplay"
              style={{ width: '100%', height: '600px', marginTop: '20px' }}  // Adjust iframe style as needed
            />
          )}
        </main>
      </div>
    </ChakraProvider>
  );
}

export default App;


