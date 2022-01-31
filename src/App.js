import React from "react";
import Header from "./components/Header";
import Input from "./components/input";
import Cond from "./components/condtional";
import Fomrms from "./components/forms";
import PracticeForm from "./components/practiceForm";
import PracticeApi from "./components/practiceAPI";

const App = () => {
  return (
    <div>
      <PracticeApi />
      {/* <Header />
      <Input /> */}
    </div>
  );
};

export default App;
