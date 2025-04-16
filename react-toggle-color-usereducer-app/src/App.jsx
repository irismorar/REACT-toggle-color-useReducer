import { useReducer } from "react";
import { useEffect } from "react";
import "./App.css";

const initialTheme = "light";

function themeReducerFunction(state, action) {
  const { type } = action;
  switch (type) {
    case "TOGGLE_THEME": {
      return state === "light" ? "dark" : "light";
    }
    default: {
      return state;
    }
  }
}

export default function App() {
  const [currentTheme, dispatch] = useReducer(
    themeReducerFunction,
    initialTheme
  );

  useEffect(() => {
    document.body.style.backgroundColor =
      currentTheme === "light" ? "#ccc" : "#222";
    document.body.style.color = currentTheme === "light" ? "#444" : "#ccc";
  }, [currentTheme]);

  return (
    <>
      <header>
        <h1>Bright or not?</h1>
      </header>
      <main>
        <div>Current theme: {currentTheme.toUpperCase()}</div>
        <br />
        <button
          style={{
            border:
              currentTheme === "light"
                ? "1px solid #444"
                : "1px solid transparent",
          }}
          onClick={() => {
            dispatch({ type: "TOGGLE_THEME" });
          }}
        >
          Toggle app theme
        </button>
      </main>
    </>
  );
}
