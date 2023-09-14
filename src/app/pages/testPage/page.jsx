"use client";

import React from "react";

const TestPage = () => {
  const [state, setState] = React.useState("");

  const clicked = () => {
    setState("Clicked");
  };

  return (
    <div>
      <h1>Test Page</h1>
      <button type="button" onClick={() => clicked()}>
        Test
      </button>
      <br />
      {state}
    </div>
  );
};

export default TestPage;
