import React, { FunctionComponent, useMemo } from 'react';
import Shepherd from 'shepherd.js';
import Step from 'shepherd.js/src/types/step';
import Tour from 'shepherd.js/src/types/tour';

export interface ShepherdButtonWithType extends Step.StepOptionsButton {
  type?: string;
}

export interface ShepherdOptionsWithType extends Step.StepOptions {
  buttons?: ReadonlyArray<Step.StepOptionsButton | ShepherdButtonWithType>;
}

interface ShepherdProps {
  steps: Array<ShepherdOptionsWithType>;
  tourOptions: Tour.TourOptions;
}

const ShepherdTourContext = React.createContext<Tour | null>(null);
const ShepherdTourContextConsumer = ShepherdTourContext.Consumer;

/**
 * Take a set of steps and formats to use actions on the buttons in the current context
 * @param {Array} steps
 * @param {Array} tour
 * @private
 */
const addSteps = (steps: Array<Step.StepOptions>, tour: Tour) => {
  // Return nothing if there are no steps
  if (!steps.length) {
    return [];
  }

  const parsedStepsforAction = steps.map((step: Step.StepOptions): Step.StepOptions => {
    const { buttons } = step;

    if (buttons) {
      step.buttons = buttons.map((button: ShepherdButtonWithType) => {
        const { classes, disabled, label, secondary, text, type } = button;
        return {
          // TypeScript doesn't have great support for dynamic method calls with
          // bracket notation, so we use the `any` escape hatch
          action: (tour as any)[type!],
          classes,
          disabled,
          label,
          secondary,
          text,
          type
        };
      });
    }

    return step;
  });

  parsedStepsforAction.forEach((step: any) => tour.addStep(step));
};

export const ShepherdTour: FunctionComponent<ShepherdProps> = props => {
  const { tourOptions, steps } = props;
  const tourObject = useMemo(() => {
    const tourObject = new Shepherd.Tour(tourOptions);

    addSteps(steps, tourObject);

    return tourObject;
  }, [tourOptions, steps]);

  return (
    <ShepherdTourContext.Provider value={tourObject}>
      {props.children}
    </ShepherdTourContext.Provider>
  );
};

export type { default as Step } from 'shepherd.js/src/types/step';
export type { default as Tour } from 'shepherd.js/src/types/tour';
export { ShepherdTourContextConsumer as TourMethods, ShepherdTourContext };
