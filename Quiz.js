import React, { useState } from 'react';

const Quiz = () => {
  const quizData = [
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tech Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Who is responsible for web standards?",
      choices: ["Mozilla", "Microsoft", "The World Wide Web Consortium", "Google"],
      correctAnswer: "The World Wide Web Consortium",
    },
    {
      question: "Select the largest heading element:",
      choices: ["<h6>", "<head>", "<h1>", "<header>"],
      correctAnswer: "<h1>",
    },
    {
      question: "How do you insert a line break in HTML?",
      choices: ["<br>", "<lb>", "<break>", "<newline>"],
      correctAnswer: "<br>",
    },
    {
      question: "Which character indicates an end tag?",
      choices: ["/", "<", "^", "*"],
      correctAnswer: "/",
    },
  ];

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswer = (questionIndex, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const calculateScore = () => {
    const totalScore = quizData.reduce((acc, item, index) => {
      return answers[index] === item.correctAnswer ? acc + 1 : acc;
    }, 0);
    setScore(totalScore);
  };

  return (
    <div style={{ margin: "auto", maxWidth: "600px", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>HTML Quiz</h2>
      {quizData.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h4>
            {index + 1}. {item.question}
          </h4>
          {item.choices.map((choice, i) => (
            <label key={i} style={{ display: "block", marginBottom: "8px" }}>
              <input
                type="radio"
                name={`question-${index}`}
                value={choice}
                checked={answers[index] === choice}
                onChange={() => handleAnswer(index, choice)}
              />
              {choice}
            </label>
          ))}
        </div>
      ))}
      <button
        onClick={calculateScore}
        style={{
          display: "block",
          padding: "10px 15px",
          margin: "20px auto",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
      {score !== null && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>
            Your Score: {score} / {quizData.length}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Quiz;
