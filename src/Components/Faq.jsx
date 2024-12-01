import React from "react";
import { questions } from "../utils/faq";
import './faq.css';

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans-serif text-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-white" style={{ textShadow: '0 0 20px #d303fc' }}>
        Frequently Asked Questions
      </h1>

      {questions.map((question) => (
        <div key={question.id}>
          <details className="glassmorphic-container bg-transparent rounded p-4 mb-4 font-faqfont border border-darkgrey transition duration-300 ease-in-out">
            <summary className="cursor-pointer text-lg font-semibold text-white flex items-center justify-between hover:text-[#d303fc] focus:text-[#d303fc] transition-all duration-200">
            <span>{question.question}</span>
              <span className="text-xl">&#x2699;&nbsp;&nbsp;</span>
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
