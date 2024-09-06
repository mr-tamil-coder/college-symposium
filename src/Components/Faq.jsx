import React from "react";
import { questions } from "../utils/faq";
const Faq = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 font-sans  ">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>

      {questions.map((question) => (
        <div key={question.id}>
          <details className="bg-gray-100 rounded p-4 mb-4 border border-gray-200 transition duration-300 ease-in-out text-black text-lg">
            <summary class="cursor-pointer">{question.question}</summary>
            <p className="p-2 text-lg">{question.answer}</p>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Faq;
