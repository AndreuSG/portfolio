import React from 'react';

export const CodeBlock: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-purple rounded-full blur-3xl opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative p-6 border border-gray-800 rounded-2xl bg-black-50/50 backdrop-blur-sm animate-float shadow-purple">
        <div className="p-4 border-b border-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="p-4">
          <pre className="text-xs sm:text-sm font-mono">
            <code className="text-gray-300">
              <span className="text-purple-light">const</span>{" "}
              <span className="text-lilac">developer</span> = {"{"}
              <br />
              {"  "}name: <span className="text-green-400">'Andreu Sánchez Guerrero'</span>,
              <br /><br />
              {"  "}company: <span className="text-green-400">'Codiara'</span>,
              <br />
              {"  "}role: {"{"}
              <br />
              {"    "}primary: <span className="text-green-400">'Dev Team Manager'</span>,
              <br />
              {"    "}focus: <span className="text-green-400">'DevOps'</span>,
              <br />
              {"    "}passion: <span className="text-green-400">'Technical Leadership'</span>
              <br />
              {"  "}{"}"}, 
              <br /><br />
              {"  "}expertise: [
              <br />
              {"    "}<span className="text-green-400">'Cloud Infrastructure'</span>,
              <br />
              {"    "}<span className="text-green-400">'CI/CD Pipelines'</span>,
              <br />
              {"    "}<span className="text-green-400">'Web Development'</span>
              <br />
              {"  "}],
              <br /><br />
              {"  "}location: <span className="text-green-400">'Barcelona, Spain'</span>
              <br />
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};