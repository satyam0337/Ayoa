import Home from './Components/Home';
import './App.css';
import LogIn from "./Components/Login"
import Pricing from "./Pages/Pricing"
import { Routes,Route} from "react-router-dom"
import SignUp from './Components/Signup';
import MindMap from "./Pages/MindMap"
import SubScribe from "./Pages/SubScribe"


function App() {
  return (
    <div className="App">
     <Routes>
         <Route path="/" element={<Home />}  />
         <Route path="/login" element={<LogIn />}  />
         <Route path="/signup" element={<SignUp />}  />
         <Route path="/pricing" element={<Pricing />}  /> 
         <Route path="/mindmap" element={<MindMap />}  /> 
         <Route path="/subcribed" element={<SubScribe />}  /> 
     </Routes>
    </div>
  );
}

export default App;
