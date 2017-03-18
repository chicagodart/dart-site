import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero-img">
          <img src="http://www.arshtcenter.org/Global/PressRoom/photos/hi/Spring%20Awakening%20photo%20by%20Paul%20Kolnick.jpg" alt="A scene from Spring Awakening" height="100%" width="100%" />
        </div>

        <div className="max-width-12 mx-auto">
          <div className="clearfix mx3">
            <div className="col col-8">
              <h1>About</h1>
              <h1>News Feed</h1>
            </div>
            <div className="col col-4 center">
              <h1>Call to Action</h1>
              <h1>Calender</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
