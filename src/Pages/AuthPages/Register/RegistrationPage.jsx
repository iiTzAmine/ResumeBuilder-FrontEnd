import React from "react";
import NavbarAuth from "../../../Components/NavBar/NavbarAuth";

function RegistrationPage() {
  return (
    <div className="w-100">
      <NavbarAuth />
      <div className="main">
        <div className="__image_"></div>
        <div className="content">
          <div className="__firstPart">
            <h1 className="text-dark __dropShadow">
              Welcome
              {/* <span>to Orange Digital <br /> Center Network</span> */}
            </h1>
            <h3 className="__subTitle __dropShadow">
              To Orange Digital Center Network
            </h3>
            <p className="par text-dark __dropShadow">
              See the latest posts from Orange Digital Center across the globe.
              Join the community to see more and be able to participate in
              events, trainings or even get your dream job!
            </p>
          </div>
          <div className="form __secondPart">
            {/* <h2>Login Here</h2> */}
            <input
              type="text"
              name="fName"
              placeholder="First Name"
              className="_name"
            />
            <input
              type="text"
              name="lName"
              placeholder="Last Name"
              className="_name"
            />
            <input type="text" name="Telephone" placeholder="Telephone" />
            <input type="email" name="Email" placeholder="Email" />
            <select name="gender">
              <option hidden>Gender</option>
              <option name="male" id="" value="male">
                male
              </option>
              <option name="female" id="" value="female">
                female
              </option>
            </select>
            <input type="login" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="Password " />

            <button className="btnn">
              <a href="#">Sign up </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
