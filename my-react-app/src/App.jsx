import React, {useState, lazy, Suspense, memo,useMemo, useCallback} from "react";
import "./App.css";
import Greeting from "./Greeting"
import Dashboard from "./Dashboard";
import Counter from "./Counter";
import ThemeContext from "./context/ThemeContext";
import Timer from "./Timer";
import DataDisplay from "./DataDisplay";
import withLoading from "./hoc/withLoading";
import ErrorBoundary from "./ErrorBoundary";
import FaultyComponent from "./FaultyComponent"
import MyMemo from "./ReactMemo"
import ChildComponent from "./ChildComponent.jsx";
import useWindowWidth from "./WindowWidth.jsx";
import ErrorButton from "./ErrorButton.jsx";
const LazyComp = lazy(() => import ("./LazyComponent.jsx"));



function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({message: "Hello, world!"}), 2000)
  );
}
const DataDisplayWithLoading = withLoading(DataDisplay, fetchData);


function App() {
  const [theme, setTheme] = useState("light");
  const memoVal = "constant memo val"

  const [number, setNumber] = useState(1)
  const factorial = useMemo(() => {
    console.log("Calculating factorial");
    const computeFactorial = (n) => (n <= 1 ? 1 : n * computeFactorial(n - 1));
    return computeFactorial(number);
  
  }, [number]);

  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("button clicked");
  }, []);

  const width = useWindowWidth();
  return (
    <ThemeContext.Provider value={theme}>
    <DataDisplayWithLoading/>
    <Greeting name="Max"></Greeting>
    <Dashboard />
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    <Counter />
    <Timer />
    <ErrorBoundary>
    <FaultyComponent />
    </ErrorBoundary>
    <Suspense fallback={<div>Loading....</div>}>
    <LazyComp />
    
    </Suspense>
    <div>
      <h2>factorial of {number} is {factorial}</h2>
    </div>
   
    <button onClick={() => setNumber(number + 1)}>increment number</button>
    <button onClick={() => setCount(count + 1)}>increment {count}</button> 
    <ChildComponent onClick={handleClick} />
    <MyMemo value={memoVal} />
    <h2>window width {width}</h2>
    <ErrorButton />
    
    
  </ThemeContext.Provider>);
}

export default App;

