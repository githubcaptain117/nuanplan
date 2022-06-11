// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.scss';
import {
  Navbar,
  Sidebar,
  // Footer,
  Home,
  About,
  Contact,
  Blog,
  Posts,
  Post,
} from "./components";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <>
      <div className={`app`}>
        <Router>
          <div>
            <Sidebar
              image={image}
              collapsed={collapsed}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
            />
          </div>
          <div className={`contain`}>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />}>
                  <Route path="" element={<Posts />} />
                  <Route path=":postSlug" element={<Post />} />
                </Route>
              </Routes>
              {/* <Footer /> */}
            </main>
          </div>
        </Router>
      </div>
    </>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <h1>
  //         HELLO WORLD!
  //       </h1>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
