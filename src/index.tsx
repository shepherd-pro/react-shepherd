import React, { FunctionComponent } from 'react';
import Shepherd from 'shepherd.js';
import Step from 'shepherd.js/src/types/step';
import Tour from 'shepherd.js/src/types/tour';

interface ShepherdProps {
  steps: Array<Step>;
  tourOptions: Tour.TourOptions;
}

interface ShepherdStepWithType extends Step.StepOptionsButton {
  type?: string;
}

const ShepherdTourContext = React.createContext({});
const ShepherdTourContextConsumer = ShepherdTourContext.Consumer;

/**
 * Take a set of steps and formats to use actions on the buttons in the current context
 * @param {Array} steps
 * @private
 */
const addSteps = (steps: Array<Step> | Array<Step.StepOptions>, tour: Tour) => {
  // Return nothing if there are no steps
  if (!steps.length) {
    return [];
  }

  steps.forEach((step: any, index: number): Step => {
    const { buttons } = step;

    if (buttons) {
      step.buttons = buttons.map((button: ShepherdStepWithType) => {
        const { type, classes, text, action } = button;
        return {
          // TypeScript doesn't have great support for dynamic method calls with
          // bracket notation, so we use the `any` escape hatch
          action: action || (tour as any)[type!],
          classes,
          text,
          type
        };
      });
    }

    return tour.addStep(step);
  });
};

export const ShepherdTour: FunctionComponent<ShepherdProps> = props => {
  const { tourOptions, steps } = props;
  const tourObject = new Shepherd.Tour(tourOptions);

  addSteps(steps, tourObject);

  return (
    <ShepherdTourContext.Provider value={tourObject}>
      {props.children}
    </ShepherdTourContext.Provider>
  );
};

export { ShepherdTourContextConsumer as TourMethods, ShepherdTourContext };
