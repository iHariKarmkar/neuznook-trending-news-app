import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import News from "./components/News";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        exact
        path=""
        element={<News key="general" category="general" country="in" />}
      />
      <Route
        exact
        path="business"
        element={<News key="business" category="business" country="in" />}
      />
      <Route
        exact
        path="sports"
        element={<News key="sports" category="sports" country="in" />}
      />
      <Route
        exact
        path="science"
        element={<News key="science" category="science" country="in" />}
      />
      <Route
        exact
        path="technology"
        element={<News key="technology" category="technology" country="in" />}
      />
      <Route
        exact
        path="health"
        element={<News key="health" category="health" country="in" />}
      />
      <Route
        exact
        path="entertainment"
        element={
          <News key="entertainment" category="entertainment" country="in" />
        }
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
