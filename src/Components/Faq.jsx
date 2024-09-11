import React from "react";
import { questions } from "../utils/faq";

const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">
        Frequently Asked Questions
      </h1>

      {questions.map((question) => (
        <div key={question.id}>
          <details className="bg-gray-800 rounded p-4 mb-4 border border-gray-700 transition duration-300 ease-in-out">
            <summary className="cursor-pointer text-lg font-semibold text-blue-300 hover:text-blue-500 focus:text-blue-500 transition-all duration-200">
              {question.question}
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
