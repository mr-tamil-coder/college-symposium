import React from "react";
import { questions } from "../utils/faq";
import './faq.css';

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans-serif text-white">
      <h1 className="text-4xl font-bold mb-6 text-center font-otherfont text-white" style={{ textShadow: '0 0 20px #d303fc' }}>
        FAQs
      </h1>

      {questions.map((question) => (
        <div key={question.id}>
          <details className="glassmorphic-container bg-transparent rounded p-4 mb-4 font-sans border border-darkgrey transition duration-300 ease-in-out">
            <summary className="cursor-pointer font-bold text-lg text-white flex items-center justify-between hover:text-[#DA0C81] focus:text-[#d303fc] transition-all duration-200">
            <span>{question.question}</span>
              <span className="text-xl">&#x2699;</span>
            </summary>
            <p className="p-2 text-lg text-gray-300 transition-all duration-300 ease-in-out">
              {question.answer}
            </p>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Faq;
