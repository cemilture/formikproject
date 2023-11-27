import { Route, Routes } from "react-router-dom";
import "./App.css";
import GeneralForm from "./components/GeneralForm";
import Portalform from "./components/Portalform";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/portal" element={<Portalform />} />
      </Routes>
    </div>
  );
}

export default App;
