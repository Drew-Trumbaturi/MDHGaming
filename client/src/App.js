import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Components/Styles.css";
// We use Route in order to define the different routes of our application
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
// We import all the components we need in our app
import Navbar from "./Components/Nav";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container bg-light">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <div className="card-columns">
        <div className="card border-light bg-light">
          <img
            className="card-img-top rounded-circle img-fluid"
            src={require("./Images/Logo.jpg")}
            alt="mdhbg.jpg"
          />
          <div className="card-body">
            <h1 className="card-title p-2 rounded-pill bg-secondary text-light text-center">
              What is MDH Gaming
            </h1>
            <p className="card-text">
              MDH Gaming is all about giving everyone the chance to play the top
              games on the market no matter if you dont have a pc yourself, or
              you just want to have a fun LAN party with your friends. Contact
              us about setting up a date for any birthday party, team
              tourniments or any other inquiries you may have.
            </p>
          </div>
        </div>

        <div className="card border-light bg-light">
          <div className="card-body">
            <h2 className="card-title p-2 rounded-pill bg-secondary text-light text-center">
              Contact us
            </h2>
            <p className="card-text text-center font-weight-bolder">
              Phone#: 07 578 8998
            </p>
          </div>
        </div>

        <div className="card rounded-pill bg-light text-center border-light">
          <div className="card-body">
            <h2 className="card-title p-2 rounded-pill bg-secondary text-light">
              Opening Hours
            </h2>
            <ul className="card-text center">
              <li className="font-weight-bolder">Monday: Closed</li>
              <li className="font-weight-bolder">Tuesday: 3pm - 9pm</li>
              <li className="font-weight-bolder">Wednesday: 3pm - 9pm</li>
              <li className="font-weight-bolder">Thursday: 3pm - 9pm</li>
              <li className="font-weight-bolder">Friday: 12pm - 9pm</li>
              <li className="font-weight-bolder">Saturday: 12pm - 9pm</li>
              <li className="font-weight-bolder">Sunday: 12pm - 9pm</li>
            </ul>
          </div>
        </div>

        <div className="card bg-light text-center border-light">
          <div className="card-body">
            <h2 className="card-title p-2 rounded-pill bg-secondary text-light">
              Drinks and Munchies
            </h2>
            <p className="card-text text-center">
              We have all the food and drinks you will need to stay fueled
              during your epic gaming experience.
            </p>
          </div>
          <img
            src={require("./Images/monsterdrinks.jpg")}
            className="card-image-bottom m-1 img-fluid"
            alt="mdhbg.jpg"
          />
          <img
            src={require("./Images/vdrinks.jpg")}
            className="card-image-bottom m-1 img-fluid"
            alt="mdhbg.jpg"
          />
          <img
            src={require("./Images/mdhsnacks.jpg")}
            className="card-image-bottom m-1 img-fluid"
            alt="mdhbg.jpg"
          />
          <img
            src={require("./Images/mdhdrinks.jpg")}
            className="card-image-bottom m-1 img-fluid"
            alt="mdhbg.jpg"
          />
        </div>

        <section id="populargames">
          <div className="card border-light bg-light">
            <div className="card-body">
              <h2 className="card-title p-2 rounded-pill bg-secondary text-light text-center">
                Some of our most popular games
              </h2>
            </div>
            <img
              src={require("./Images/fortnight.jpeg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhbg.jpg"
            />
            <img
              src={require("./Images/league.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhbg.jpg"
            />
            <img
              src={require("./Images/valorant.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhbg.jpg"
            />
            <img
              src={require("./Images/pubg.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhbg.jpg"
            />
            <div>
              <p className="card-text font-weight-bolder text-center">
                And so much more!
              </p>
            </div>
          </div>
        </section>

        <div className="card border-light bg-light">
          <div className="card-body">
            <h2 className="card-title p-2 rounded-pill bg-secondary text-light text-center">
              Find us here!
            </h2>
            <p className="card-text text-center">
              96 Grey Street, Tauranga 3110, New Zealand
            </p>
            <iframe
              title="Google maps"
              className="card-img-bottom"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d986.0659558194227!2d176.16806276138598!3d-37.68663766622028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18d14e52e117cecc!2sMDH%20Gaming!5e0!3m2!1sen!2snz!4v1672277169430!5m2!1sen!2snz"
              style={{ border: 0 }}
              height="350"
              width="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <section id="gallery">
        <div className="card border-light bg-light">
          <div className="card-body">
            <h2 className="card-title p-2 rounded-pill bg-secondary text-light text-center">
              Gallery
            </h2>
          </div>
          <div className="card-columns">
            <img
              src={require("./Images/Logo.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhbg.jpg"
            />
            <img
              src={require("./Images/mdhlogo.png")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhbg.jpg"
            />
            <img
              src={require("./Images/mdhdrinks.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhbg.jpg"
            />
            <img
              src={require("./Images/mdhsnacks.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhsnacks.jpg"
            />
            <img
              src={require("./Images/mdhbg.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhbg.jpg"
            />
            <img
              src={require("./Images/mdhgroup.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhgroup.jpg"
            />
            <img
              src={require("./Images/mdhgamers.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="mdhgamers.jpg"
            />
            <img
              src={require("./Images/mdhbday'.jpg")}
              className="card-image-bottom m-1 img-fluid"
              alt="bday"
            />
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="card bg-light text-center border-light">
          <div className="card-body">
            <h2 className="card-title p-2 rounded-pill bg-secondary text-light">
              Testimonials
            </h2>
            <div className="elfsight-app-5da166fe-8483-4b7e-ba65-47fcdac61236 card-text"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
