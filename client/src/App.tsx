import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("backend/getdata");
      console.log("----", data);
    };
    Promise.all([getData()]);
  });

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default App;
