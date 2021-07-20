import { useContext } from "react";
import { CustomCursorContext } from "../context/cursor";

function useCustomCursorContext() {
  const context = useContext(CustomCursorContext);
  if (!context) {
    throw new Error(
      "useCustomCursorContext must be used within CustomCursorProvider"
    );
  }
  return context;
}

export default useCustomCursorContext;
