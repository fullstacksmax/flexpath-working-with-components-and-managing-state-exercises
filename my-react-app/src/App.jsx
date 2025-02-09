import React, {useState} from "react";
import "./App.css";
import Greeting from "./Greeting"
import Dashboard from "./Dashboard";
import Counter from "./Counter";
import ThemeContext from "./context/ThemeContext";
import Timer from "./Timer";



function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
  <div>
    
    <Greeting name="Max"></Greeting>
    <Dashboard />
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    <Counter />
    <Timer />
    
  </div>
  </ThemeContext.Provider>);
}

export default App;
