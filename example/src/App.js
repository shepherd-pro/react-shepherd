import React, { Component, useContext } from 'react';
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd';
import HomePage from './home';
import newSteps from './steps';
import 'shepherd.js/dist/css/shepherd.css';

const tourOptions = {
  defaultStepOptions: { showCancelLink: true },
  useModalOverlay: true
};

export default class App extends Component {
  render() {
    return (
      <div>
        <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
          <Content />
        </ShepherdTour>
      </div>
    );
  }
}

function Content() {
  const tour = useContext(ShepherdTourContext);

  return (
    <div>
      <HomePage>
        <button className="button dark" onClick={tour.start}>
          Start Tour
        </button>
      </HomePage>
    </div>
  );
}
