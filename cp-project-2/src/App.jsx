import "./App.css";
import Flashcard from "./Flashcard";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((currentIndex + 1) % flashcards.length);
  };
  const backCard = () => {
    setCurrentIndex((currentIndex - 1) % flashcards.length);
  };

  const flashcards = [
    {
      question: "What does CPU stand for?",
      answer: "Central Processing Unit",
    },
    {
      question: "What is the primary function of RAM in a computer?",
      answer:
        "RAM, or Random Access Memory, is a type of computer memory that can be accessed randomly. It is the primary workspace for the computer's processor where data is stored for quick access.",
    },
    {
      question: "What is an algorithm?",
      answer:
        "An algorithm is a set of instructions designed to perform a specific task. In computer science, algorithms are used for data processing, performing calculations and automated reasoning tasks.",
    },
    {
      question: "What is a data structure?",
      answer:
        "A data structure is a specific way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Examples include arrays, linked lists, and hash tables.",
    },
    {
      question: "What is object-oriented programming?",
      answer:
        "Object-oriented programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data and code: data in the form of fields, and code, in the form of procedures.",
    },
  ];

  return (
    <div className="App">
      <h1>Testing your CS Knowledge</h1>

      <p>Let's test your knowledge in this field now!</p>

      <p>Number of Cards left: {flashcards.length - currentIndex}</p>

      <div>
        <Flashcard
          question={flashcards[currentIndex].question}
          answer={flashcards[currentIndex].answer}
        />
      </div>

      <button onClick={nextCard}>Next</button>
      <button onClick={backCard}>Back</button>
    </div>
  );
};

export default App;
