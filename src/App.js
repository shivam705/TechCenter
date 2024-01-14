
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Course from './components/Course';
import StudentRegistration from './components/StudentRegistration';
import About from './components/About';

// function App() {
//   return (
//     // 
    
//   );
// }

// export default App;


function Logo() {
  return (
    <div>
      <a href="#">
        <div className="logo-wrap">
          <div 
            id="logo" 
            className='logo' 
            alt="Brand logo"
            >
            Brand
          </div>
        </div>
      </a> 
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT US GCEC</a></li>
        <li><a href="#">COURSE</a></li>
        <li><a href="#">STUDENT REGISTRATION</a></li>
        <li><a href="#">CONTACT US</a></li>
        
        <button className="btn">Log In</button>
        <button className="btn">Sign Up</button>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <div className="h-container">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}


function App() {
  return (
    // <div>
    //   <Header />
    // </div>
    <Router>
          <Routes>
              <Route exact path='/' element={< Home />} ></Route>
             
              <Route exact path='/contact' element={< Contact />} />
              <Route exact path='/course' element={< Course />} />
              <Route exact path='/registration' element={<StudentRegistration/>}/>
              <Route exact path='/about' element={< About />} />
          </Routes>
      </Router>
  );
}

export default App;