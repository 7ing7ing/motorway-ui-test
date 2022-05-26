import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Cards";
import Form from "./Form";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    let initialTime = new Date();
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data) => {
        // This console.log shows how many ms the API takes to give the response
        console.log(
          "Response time for the API: " + (new Date() - initialTime) + "ms"
        );
        //console.log("Success:", data);
        setImages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/card" element={<Cards images={images} />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
