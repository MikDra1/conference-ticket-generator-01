import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FormProvider } from "./contexts/FormProvider.jsx";
import { ConfProvider } from "./contexts/ConfProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfProvider>

    <FormProvider>
      <App />
    </FormProvider>
    </ConfProvider>
  </StrictMode>
);
