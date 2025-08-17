import { createRoot } from "react-dom/client";
import "./shared/style/index.css";
import App from "./app/App.tsx";
import "./shared/style/main.scss";
import "./shared/style/animations.css";
import "./shared/style/transitions.css";
import "./shared/style/globalStyles.scss";

createRoot(document.getElementById("root")!).render(<App />);
