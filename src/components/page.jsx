import React, { useState } from "react";

const Editor = ({ language, value, onChange, iconClass }) => (
  <div className="flex-1 flex flex-col mb-4 bg-gray-300 rounded-md overflow-hidden">
    <div className="flex items-center bg-black text-white p-1">
      <i className={`${iconClass} h-6 w-6 flex items-center justify-center mr-2`}></i>
      <span className="font-bold">{language}</span>
    </div>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 p-2 w-full resize-none focus:outline-none bg-gray-200 text-black"
    ></textarea>
  </div>
);

const Page = () => {
  const [html, setHtml] = useState(`<h1>Hello, World!</h1>
<p>This is a simple example.</p>`);
  
  const [css, setCss] = useState(`body { 
  font-family: Arial, sans-serif; 
}
h1 {
  color: #ff6347;
  text-align: center;
}`);
  
  const [js, setJs] = useState(`document.querySelector('h1').addEventListener('click', () => {
  alert('You clicked the heading!');
});`);

  const output = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body { background: black; color: white; margin: 0; padding: 20px; }
    ${css}
  </style>
</head>
<body>
  ${html}
  <script>
    ${js}
  </script>
</body>
</html>
  `;

  return (
    <div className="flex h-screen">
      {/* Left: Code Editor */}
      <div className="flex flex-col w-1/2 p-4 gap-2 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-2">Code Editor</h1>
        <Editor language="HTML" value={html} onChange={setHtml} iconClass="fa-brands fa-html5" />
        <Editor language="CSS" value={css} onChange={setCss} iconClass="fa-brands fa-css3-alt" />
        <Editor language="JavaScript" value={js} onChange={setJs} iconClass="fa-brands fa-js" />
      </div>

      {/* Right: Output */}
      <div className="w-1/2 p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-2 bg-gray-300 text-black p-1 rounded-md flex items-center">
          <i className="fa-solid fa-play mr-2"></i> Output
        </h1>
        <iframe
          className="flex-1 w-full bg-black text-white rounded-md"
          srcDoc={output}
          sandbox="allow-scripts"
          title="output"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
