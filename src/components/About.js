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
               More about TextUtils
              </h3>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body" style={myStyle}>
              <div className="row align-items-center">
                <div className="col-md-8">
                  <p>
                    TextUtils was created in 2026 by Sakshi Shastri, a software developer with a passion for creating tools that enhance productivity and simplify tasks. The idea for TextUtils originated from the need for a versatile text manipulation tool that could handle various text processing tasks efficiently. Over the years, TextUtils has evolved and expanded its features based on user feedback and technological advancements. It has become a popular choice among students, writers, and professionals for its user-friendly interface and powerful text manipulation capabilities. Today, TextUtils continues to be actively developed and maintained, with regular updates and new features being added to meet the changing needs of its users.
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <img
                    src="/profile-pic.jpg"
                    alt="Profile"
                    className="img-fluid rounded"
                    style={{ width: '200px' }}
                  />
                </div>
              </div>
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
