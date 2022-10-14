import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Navigation from "./components/navigation-bar-component";
import Homepage from "./components/Homepage-component";
import resume from './resume';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation resume={resume}/>}/>
      <Route path="/home" element={<Homepage resume={resume}/>} />
    </Routes>
  );
};

export default App;
