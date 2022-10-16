import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Navigation from "./components/navigation-bar-component";
import Homepage from "./components/Homepage-component";
import resume from './resume';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation resume={resume}/>}>
      </Route>
      <Route path="/home" element={<Homepage resume={resume}/>} />
    </Routes>
  );
};

export default App;
