import React, { Component } from 'react'
import {ShepherdTour, TourMethods} from 'react-shepherd'
import HomePage from './home'
import newSteps from './steps'

const defaultStepOptions = { showCancelLink: true };
const useModalOverlay = true;

export default class App extends Component {
  render() {
    return (
      <div>
        <ShepherdTour
          defaultStepOptions={defaultStepOptions}
          steps={newSteps}
          useModalOverlay={useModalOverlay}
        >
          <Content />
        </ShepherdTour>
      </div>
    );
  }
}

function Content() {
  return (
    <div>
      <HomePage>
        <TourMethods>
          {({ startTour }) => (
            <button className="button dark" onClick={startTour}>
              Start Tour
            </button>
          )}
        </TourMethods>
      </HomePage>
    </div>
  );
}
