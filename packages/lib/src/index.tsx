import React, { FC, useMemo } from 'react';
import Shepherd from 'shepherd.js';
import Step from 'shepherd.js/src/types/step';
import Tour from 'shepherd.js/src/types/tour';

type StepType = 'back' | 'cancel' | 'next';
export interface ShepherdButtonWithType extends Step.StepOptionsButton {
  type?: StepType;
}

export interface ShepherdOptionsWithType extends Step.StepOptions {
  buttons?: ReadonlyArray<Step.StepOptionsButton | ShepherdButtonWithType>;
}

interface ShepherdProps {
  steps: Array<ShepherdOptionsWithType>;
  tourOptions: Tour.TourOptions;
  children: React.ReactNode;
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
        const {
          action, classes, disabled, label, secondary, text, type,
        } = button;
        return {
          action: type ? tour[type] : action,
          classes,
          disabled,
          label,
          secondary,
          text,
          type,
        };
      });
    }

    return step;
  });

  return parsedStepsforAction.forEach((step: any) => tour.addStep(step));
};

export const ShepherdTour: FC<ShepherdProps> = ({ children, tourOptions, steps }) => {
  const tourObject = useMemo(() => {
    const tourInstance = new Shepherd.Tour(tourOptions);

    addSteps(steps, tourInstance);

    return tourInstance;
  }, [tourOptions, steps]);

  return (
    <ShepherdTourContext.Provider value={tourObject}>
      {children}
    </ShepherdTourContext.Provider>
  );
};

export type { default as Step } from 'shepherd.js/src/types/step';
export type { default as Tour } from 'shepherd.js/src/types/tour';
export { ShepherdTourContextConsumer as TourMethods, ShepherdTourContext };
