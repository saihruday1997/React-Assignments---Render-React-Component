import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <p data-ns-test>
        I am learning React. My life is getting better.
        <p data-ns-test="project-name">Tv Series Tracker Application. </p>
        <p data-ns-test="project-description">
          Track progress of tv series of different platforms at a single place.{" "}
        </p>
      </p>
    </>
  );
};

export default App;
