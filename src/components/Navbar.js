import React from 'react';
import { Route, Link, BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';

// Create components for different pages
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;
const NotFound = () => <h2>Page Not Found</h2>; // Component for handling unknown routes

// Create the NavigationBar component
const NavigationBar = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Routes for different pages */}

          <Route path="/" exact component={EmptyPage} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
      </div>
    </BrowserRouter>
  );
};

// EmptyPage component for the initial empty page
const EmptyPage = () => {
  return (
    <div>
      {/* Content for the initial empty page */}
      <h2>Welcome! Choose a section from the navigation bar.</h2>
    </div>
  );
};

export default NavigationBar;
