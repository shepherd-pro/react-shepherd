import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shepherd from 'shepherd.js';

const ShepherdTourContext = React.createContext();
const ShepherdTourContextConsumer = ShepherdTourContext.Consumer;

export class ShepherdTour extends Component {
  static propTypes = {
    children: PropTypes.node,
    steps: PropTypes.array,
    tourOptions: PropTypes.object
  };

  constructor(props) {
    super(props);

    const { tourOptions, steps } = this.props;

    this.tourObject = new Shepherd.Tour(tourOptions);
    this._addSteps(steps);
  }

  /**
   * Take a set of steps and formats to use actions on the buttons in the current context
   * @param {Array} steps An array of steps
   * @private
   */
  _addSteps(steps) {
    const tour = this.tourObject;

    // Return nothing if there are no steps
    if (!steps.length) {
      return [];
    }

    steps.forEach((step, index) => {
      const { buttons } = step;

      if (buttons) {
        step.buttons = buttons.map(button => {
          const { type, classes, text, action } = button;
          return {
            action: action || tour[type],
            classes,
            text,
            type
          };
        });
      }

      tour.addStep(step);

      // Step up events for the current step
      const currentStep = tour.steps[index];

      if (!currentStep.scrollToHandler) {
        currentStep.scrollToHandler = elem => {
          if (typeof elem !== 'undefined') {
            elem.scrollIntoView();
          }
        };
      }
    });
  }

  render() {
    return (
      <ShepherdTourContext.Provider value={this.tourObject}>
        {this.props.children}
      </ShepherdTourContext.Provider>
    );
  }
}

export { ShepherdTourContextConsumer as TourMethods };
