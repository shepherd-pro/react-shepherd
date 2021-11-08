import { cloneElement } from 'react';
import { ShepherdTour, ShepherdTourContext } from '../../../lib/dist/Shepherd';
import newSteps from '../steps';
import 'shepherd.js/dist/css/shepherd.css';

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: true
};

export default function Tour({ children }) {
  return (
    <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
      {cloneElement(children, {tourContext: ShepherdTourContext})}
    </ShepherdTour>
  );
}
