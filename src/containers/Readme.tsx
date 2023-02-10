import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    fetch("../../readme.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <button
        className={`fixed border-none  top-3 right-3 z-10 py-2 px-4 font-semibold duration-300 transition-colors border rounded-xl
        ${modal ? "bg-blue-500 text-white" : "bg-white text-black"}
        `}
        onClick={() => setModal(!modal)}
      >
        <span className="bg-blue" />
        Read Me
      </button>
      <div
        className={`fixed z-50 container mx-auto left-0 right-0 top-20 bottom-20 overflow-auto py-10 bg-white rounded-md shadow transform-gpu transition-all duration-300 origin-top-right ${
          modal
            ? "translate-x-0 translate-y-0 opacity-100 pointer-events-auto scale-100"
            : "scale-75 translate-x-16 -translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <span
          onClick={() => setModal(false)}
          className="absolute right-0 top-0 mt-3 mr-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div className="markdown-renderer prose w-full mx-auto">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default MarkdownRenderer;
