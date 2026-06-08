import React, { useState } from 'react'

export default function Textform(props) {
  document.title = "TextUtils - Home | Word Counter | Character Counter | Remove extra spaces";
  const [text, setText] = useState("");
  const handleUpClick = () =>{
   setText(text.toUpperCase());
   props.showAlert("Converted to uppercase.", "success");
  }
   const handleLowClick = () =>{
   setText(text.toLowerCase());
   props.showAlert("Converted to lowercase.", "success");
  }
  /*const handleColor = () =>{
    document.getElementById("preview").style.color = (props.mode === "success" && text!==0 ? "green" : "white");
    document.getElementById("preview").style.fontWeight = "bold";
    props.showAlert("Preview color got changed.", "success");
  }
  /*const handleFindVowels = () =>{
    const vowels = text.match(/[aeiou]/gi);
    alert(vowels ? `Vowels found: ${vowels.join(', ')}` : "No vowels found.");
  }*/
  const handleHighlightVowels = () =>{
    const highlightedText = text.replace(/([aeiou])/gi, `<span style="background: ${props.mode === "success" ? "yellow" : "#e43b90"};">$1</span>`);
    document.getElementById("preview").innerHTML = highlightedText;
    props.showAlert("Vowels are now highlighted.", "success");
  }
  const handleCopyText = () =>{
    navigator.clipboard.writeText(text)
      .then(() => {
        props.showAlert("Text copied to clipboard.", "success");
      })
      .catch(() => {
        props.showAlert("Unable to copy text. Please try again.", "danger");
      });
  }
   const handleClearText = () =>{
   setText('');
    props.showAlert("Text got cleared.", "success");
  }
  const handleOnChange= (event) =>{
    setText(event.target.value);
  }
  return (
    <>
     <div>
          <div className="mb-4" style={{color: props.mode === "success" ? "black" : "white"}}>
            <h2>{props.heading}</h2>
            
            <textarea
              className="form-control"
              value = {text}
              id="textArea"
              onChange={handleOnChange}
              aria-describedby=""
              rows="8"
              style={{backgroundColor: props.mode === "success" ? "white" : "#375461", color: props.mode === "success" ? "black" : "white"}}
            >
            </textarea>
          </div>


          <button disabled={text.length === 0} type="submit" className={`btn btn-${props.mode} m-1`} onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length === 0} type="submit" className={`btn btn-${props.mode} m-1`} onClick={handleLowClick}>
            Convert to Lowercase
          </button>
         {/* <button type="submit" className={`btn btn-${props.mode} m-1`} onClick={handleColor}>
            Preview in {props.mode === "success" ? "Green" : "White"}
          </button>*/}
          <button disabled={text.length === 0} type="submit" className={`btn btn-${props.mode} m-1`} onClick={handleHighlightVowels}>
            Highlight Vowels
          </button>
          <button disabled={text.length === 0} type="submit" className={`btn btn-${props.mode} m-1`} onClick={handleCopyText}>
            Copy to Clipboard
          </button>
           <button disabled={text.length === 0} type="submit" className={`btn btn-${props.mode} m-1`} onClick={handleClearText}>
            Clear Text
          </button>

      </div>
      <div className="container my-3" style={{color: props.mode === "success" ? "black" : "white"}}>
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter((word)=>{return word.length !== 0}).length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p id = "preview">{text == "" ? "Nothing to preview! Enter some text above to preview it here." : text}</p>
      </div>
    </>
  );
}
