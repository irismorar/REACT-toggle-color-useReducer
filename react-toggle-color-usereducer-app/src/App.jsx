import { useReducer } from "react";
import { useEffect } from "react";
import "./App.css";

const initialState = { theme: "light", font: "small" };

function reducerFunction(state, action) {
  const { type } = action;
  switch (type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    }
    case "TOGGLE_FONT": {
      return {
        ...state,
        font: state.font === "small" ? "large" : "small",
      };
    }
    default: {
      return state;
    }
  }
}

export default function App() {
  const [currentState, dispatch] = useReducer(reducerFunction, initialState);

  useEffect(() => {
    document.body.style.backgroundColor =
      currentState.theme === "light" ? "#ccc" : "#222";
    document.body.style.color =
      currentState.theme === "light" ? "#444" : "#ccc";
    document.body.style.fontSize =
      currentState.font === "small" ? "1rem" : "2rem";
  }, [currentState]);

  return (
    <>
      <header>
        <h1>Toggle or not?</h1>
      </header>
      <main>
        <div>Current theme: {currentState.theme.toUpperCase()}</div>
        <button
          style={{
            border:
              currentState.theme === "light"
                ? "1px solid #444"
                : "1px solid transparent",
          }}
          onClick={() => {
            dispatch({ type: "TOGGLE_THEME" });
          }}
        >
          Toggle app theme
        </button>
        <br />
        <br />
        <div>Current font: {currentState.font.toUpperCase()}</div>
        <button
          style={{
            border:
              currentState.theme === "light"
                ? "1px solid #444"
                : "1px solid transparent",
          }}
          onClick={() => {
            dispatch({ type: "TOGGLE_FONT" });
          }}
        >
          Toggle app font size
        </button>
      </main>
    </>
  );
}
