import React, { useState } from "react";

const Page = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const output = `
  <html>
    <head>
      <style>
        body { background: black; color: white; }
        ${css}
      </style>
    </head>
    <body>
      ${html}
      <script>${js}</script>
    </body>
  </html>
`;

  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col gap-4 p-4 m-2 mr-0">
        <div className="h-[250px] w-[550px] bg-gray-300">
          <div className="flex items-center">
            <i className="fa-brands fa-html5 h-[30px] bg-black text-white p-1 flex items-center justify-center"></i>
            <p className="h-[30px] bg-black text-white p-1 font-bold flex items-center">
              HTML
            </p>
          </div>
          <textarea
            onChange={(e) => setHtml(e.target.value)}
            className="h-[150px] p-2 bg-gray-300 text-black w-[550px] resize-none focus:outline-none"
          ></textarea>
        </div>

        <div className="h-[300px] w-[550px] bg-gray-300">
          <div className="flex items-center">
            <i className="fa-brands fa-css3-alt h-[30px] bg-black text-white p-1 flex items-center justify-center"></i>
            <p className="h-[30px] bg-black text-white p-1 font-bold flex items-center">
              CSS
            </p>
          </div>
          <textarea
            onChange={(e) => setCss(e.target.value)}
            className="h-[150px] p-2 bg-gray-300 text-black w-[550px] resize-none focus:outline-none"
          ></textarea>
        </div>

        <div className="h-[300px] w-[550px] bg-gray-300">
          <div className="flex items-center">
            <i className="fa-brands fa-js h-[30px] bg-black text-white p-1 flex items-center justify-center"></i>
            <p className="h-[30px] bg-black text-white p-1 font-bold flex items-center">
              JavaScript
            </p>
          </div>
          <textarea
            onChange={(e) => setJs(e.target.value)}
            className="h-[150px] p-2 bg-gray-300 text-black w-[550px] resize-none focus:outline-none"
          ></textarea>
        </div>
      </div>

      <div>
        <div className="h-screen w-[620px] bg-black m-5 mb-5 text-white">
          <div className="flex items-center">
            <i className="fa-solid fa-play h-[30px] bg-gray-300 text-black p-1 flex items-center justify-center"></i>
            <p className="h-[30px] bg-gray-300 text-black w-[600px] font-bold text-xl p-1 flex items-center">
              Output
            </p>
          </div>
          <iframe
            className="text-white w-full h-[calc(100%-30px)]"
            srcDoc={output}
            sandbox="allow-scripts"
            title="output"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
