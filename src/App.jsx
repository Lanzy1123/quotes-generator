//App.jsx
import {BrowserRouter as Router,Routes,Route} from "react-router"
import Navbar from "./Navbar"
import Home from "./Home"
import Contact from "./Contact"

function App() {
  
  return (
    <Router>
     <div className="App">
     <Navbar />
      <div className="content">
        <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/contact" element={ <Contact /> } />       
         <Route path="*" element={ <h1>Not Found</h1> } />
        </Routes>
      </div>
     </div>
    </Router>
  )
}

export default App;
