import React, { Component } from 'react';
import { ShepherdTour, TourMethods } from 'react-shepherd';
import HomePage from './home';
import newSteps from './steps';

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
  return (
    <div>
      <HomePage>
        <TourMethods>
          {context => (
            <button className="button dark" onClick={context.start}>
              Start Tour
            </button>
          )}
        </TourMethods>
      </HomePage>
    </div>
  );
}
