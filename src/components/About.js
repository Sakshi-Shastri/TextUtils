import React from 'react';

export default function About(props) {
 document.title = "TextUtils - About"; 
{/*const [myStyle, setMyStyle] = useState(
  {
  color: 'white',
  backgroundColor: '#212529',
  border: '1px solid white'
 }
);
const [btnText, setBtnText] = useState("Enable light mode");

const toggleStyle = () => {
  if (myStyle.color === 'white') {
    setMyStyle({
      color: 'black',
      backgroundColor: 'white',
      border: '1px solid black'
    });
    setBtnText("Enable dark mode");
  }
  else {
    setMyStyle({
      color: 'white',
      backgroundColor: '#212529',
      border: '1px solid white'
    });
  }
}*/}
  let myStyle = {
    color: props.mode === "success" ? "black" : "white",
    backgroundColor: props.mode === "success" ? "white" : "#212529",
    border: props.mode === "success" ? "1px solid black" : "1px solid white"
  }
return (
    <>
    <div className="container my-4 p-3">
      <div id="accordion" >
        <div className="card">
          <div className="card-header" id="headingOne" style = {myStyle}>
            <h5 className="mb-0">
              <h3>
               History of TextUtils
              </h3>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
           
          >
            <div className="card-body" style = {myStyle}>
              History of TextUtils: TextUtils was created in 2020 by a team of developers who wanted to provide a simple and efficient way for users to manipulate and analyze text. The idea was born out of the need for a tool that could handle various text processing tasks without requiring users to have advanced programming skills. Over the years, TextUtils has evolved and expanded its features, becoming a popular choice for individuals and businesses alike for tasks such as text transformation, analysis, and formatting.
            As of 2024, TextUtils continues to be actively developed and maintained, with regular updates and new features being added based on user feedback and emerging trends in text processing. The tool has gained a strong user base and is widely used for both personal and professional purposes, making it a go-to solution for anyone looking to work with text in a more efficient and user-friendly way.
            </div>
          </div>
        </div>
      </div>
      <div id="accordion" >
        <div className="card my-3">
          <div className="card-header" id="headingOne" style = {myStyle}>
            <h5 className="mb-0" >
               <h3>
               Geography of TextUtils
              </h3>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
           
          >
            <div className="card-body" style = {myStyle}>
                Geography of TextUtils: TextUtils is a web-based application that can be accessed from anywhere in the world with an internet connection. It is hosted on cloud servers, allowing users to access it from their computers, tablets, or smartphones without the need for any installation. The tool is designed to be responsive and compatible with various devices and browsers, ensuring that users can work with their text efficiently regardless of their location or device. Additionally, TextUtils has a global user base, with users from different countries and regions utilizing the tool for their text processing needs. This widespread accessibility has contributed to its popularity and success as a go-to solution for text manipulation and analysis.
            </div>
          </div>
        </div>
      </div>
      {/* <button type="button" className="btn btn-primary" style = {myStyle} onClick={toggleStyle}>
        {btnText}
      </button> */}
    </div>
    
    </>
  );
}
