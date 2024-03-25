import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout";
import DetailView from "./routes/DetailView";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
            <Link style={{ color: "white" }} to="/">
              Back to Home
            </Link>
          </main>
        }
      />{" "}
    </Routes>
  </BrowserRouter>
);
