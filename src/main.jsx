
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
	// If SSR or hydration is needed
	import("react-dom/client").then(({ hydrateRoot }) => {
		hydrateRoot(rootElement, <App />);
	});
} else {
	createRoot(rootElement).render(<App />);
}
