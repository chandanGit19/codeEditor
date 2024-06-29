import { useEffect, useState } from 'react';
import './App.css';
import prism, { languages } from "prismjs"
import "prismjs/components/prism-javascript"
// import "prismjs/themes/prism-dracula"
import "./prism-dracula.css"




function App() {

  const [htmlCoed ,setHtmlCode] = useState("");
  const [cssCode,setCssCode] = useState("");
  const [ jsCode,setJsCode] = useState("")
  const [iiframe,setIframe] =useState("")

 



  const handleOutput=()=>{
    // const iframe = document.getElementById("frame")

   setIframe(` <html>
    <head>
      <style>
        ${cssCode}
      </style>
    </head>
    <body>
      ${htmlCoed}
    </body>
    <script>
      ${jsCode}
    </script>
  </html>`)

    // iframe.contentDocument.innerHTML= code;

  }

  useEffect(()=>{
    prism.highlightAll()
  },[htmlCoed,cssCode,jsCode,iiframe])


  return (
    <>
    <div className="App">
    <div className='display'>
      {/* this is the textarea where we have to write html code */}
    <label>HTML</label>
    <textarea id='editing' name='html' spellCheck="false"  value={htmlCoed} onChange={(e)=>setHtmlCode(e.target.value)} ></textarea>
    </div>

    <div className='display'>
      {/* this is the textarea where we have to write css code */}
    <label>css</label>
    <textarea name='css' spellCheck="false" value={cssCode} onChange={(e)=>setCssCode(e.target.value)}></textarea>
    </div>

    <div className='display'>
      {/* this is the textarea where we have to write javascript code */}
    <label>javascript</label>
    <textarea name='javascript' spellCheck="false" value={jsCode} onChange={(e)=>setJsCode(e.target.value)}></textarea>
    </div>
    </div>
    {/* this is the area where all the code is visible in formated way so that if user want's to copy it can */}
    <pre id='highlighting'  >
      <code className={`language-html`} id='highlighting-content'>
           {iiframe}
      </code>

    </pre>
    <div className='render'>
      {/* on clicking this button the code will render in the i frame */}
      <button onClick={handleOutput }>Run</button>
      <iframe
      srcDoc={iiframe}
      id='frame'
      title='code-output'
      sandbox='allow-scripts'
      width="100%"
      height="100%"
      />

    </div>
    
    
    
    </>
  );
}

export default App;
