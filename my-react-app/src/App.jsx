import React, {useState, lazy, Suspense} from "react";
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
const LazyComp = lazy(() => import ("./LazyComponent.jsx"));

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({message: "Hello, world!"}), 2000)
  );
}
const DataDisplayWithLoading = withLoading(DataDisplay, fetchData);

function App() {
  const [theme, setTheme] = useState("light");
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
  </ThemeContext.Provider>);
}

export default App;
