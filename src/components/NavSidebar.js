import React from "react";
import { Link } from "react-router-dom";
function NavSidebar() {
  var user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {console.log(user.displayName)}
            {/* <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a> */}
            <Link className="nav-link" to="/">
              Requests
            </Link>
            <Link className="nav-link" to="/">
              Notifications
            </Link>
            <span>{user.displayName}</span>
            <img src={user.photoURL} width="50" height="50" />
          </div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2 px-1 bg-dark position-fixed" id="sticky-sidebar">
            <div className="links">
              <Link to="/" className="nav-link">
                Dashboard
              </Link>
              <Link to="/" className="nav-link">
                My Events
              </Link>
              <Link to="/" className="nav-link">
                Connection
              </Link>
              <Link to="/" className="nav-link">
                Search Brands
              </Link>
              <Link to="/" className="nav-link">
                Profile
              </Link>
              <Link to="/createEvent" className="nav-link">
                Create Event
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Link to="/" className="events">
          Running an event ? Add Now+
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-2 col-sm-12">
            <div className="card">
              <img src="/images/download.jpg" alt="heading"></img>
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">
                  One of the most finest singiing show ever hosted in the
                  country
                </p>
                <Link to="/" className="btn btn-primary">
                  Go Somewhere
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-2 col-sm-12">
            <div className="card">
              <img src="/images/download.jpg" alt="heading"></img>
              <div className="card-body">
                <h5 className="card-title">Sangeet Night </h5>
                <span className="status">* Upcoming</span>
                <p className="card-text">
                  One of the most finest singiing show ever hosted in the
                  country
                </p>
                <Link to="/">Share</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-2 col-sm-12">
            <div className="card">
              <img src="/images/download.jpg" alt="heading"></img>
              <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">
                  One of the most finest singiing show ever hosted in the
                  country
                </p>
                <Link to="/">Share</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavSidebar;
