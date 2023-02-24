import { useShepherdTour } from '../../../lib/dist/Shepherd.es';
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

export default function Tour() {
  const tour = useShepherdTour({ tourOptions, steps: newSteps });

  return (
    <button class="button dark" onClick={tour.start}>
      Start Tour
    </button>
  );
}
