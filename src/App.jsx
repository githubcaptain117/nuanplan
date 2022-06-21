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
  Plan,
  Planlist,
} from "./components";
import * as constants from "./constants";

function App() {
  const [collapsed] = useState(false);
  const [image] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [titlename, settitlename] = useState("Test1");

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const handleettitlename = (name) => {
    settitlename(name);
  }

  return (
    <>
      <div className={`app`}>
        <Router>
          <div className={`sidebar-layout`}>
            <Sidebar
              image={image}
              collapsed={collapsed}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
            />
          </div>
          <div className={`navbar-layout`}>
            <Navbar titlename={titlename} />
          </div>
          <div className={`contain`}>
            {/* <Navbar titlename={titlename} /> */}
            <main>
              <Routes>
                <Route path={`${constants.DEFUALT_URL_PATH}/`} element={<Home handleettitlename={handleettitlename} />} />
                <Route path={`${constants.DEFUALT_URL_PATH}/dashboard`} element={<Home handleettitlename={handleettitlename} />} />
                <Route path={`${constants.DEFUALT_URL_PATH}/plan`} element={<Plan handleettitlename={handleettitlename} />} />
                <Route path={`${constants.DEFUALT_URL_PATH}/planlist`} element={<Planlist handleettitlename={handleettitlename} />} />
                <Route path={`${constants.DEFUALT_URL_PATH}/about`} element={<About handleettitlename={handleettitlename} />} />
                <Route path={`${constants.DEFUALT_URL_PATH}/contact`} component={<Contact handleettitlename={handleettitlename} />} />
                <Route path={`${constants.DEFUALT_URL_PATH}/blog`} element={<Blog handleettitlename={handleettitlename} />}>
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
