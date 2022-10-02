import Home from './Components/Home';
import './App.css';
import LogIn from "./Components/Login"

import { Routes,Route} from "react-router-dom"
import SignUp from './Components/Signup';


function App() {
  return (
    <div className="App">
     <Routes>
         <Route path="/" element={<Home />}  />
         <Route path="/login" element={<LogIn />}  />
         <Route path="/signin" element={<SignUp />}  /> 
        
     </Routes>
    </div>
  );
}

export default App;
