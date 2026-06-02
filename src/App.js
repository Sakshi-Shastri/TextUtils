import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textform from "./components/Textform.js";
import About from './components/About.js'
import Alert from "./components/Alert.js";
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("success");
  const toggleMode = () => {
    if (mode === "success") {
      setMode("dark");
      document.body.style.backgroundColor = "#375461";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode("success");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Utils"
          aboutText="About Text Utils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={<About mode={mode} toggleMode={toggleMode} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
