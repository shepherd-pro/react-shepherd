import React, { useContext } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ShepherdTour, ShepherdTourContext } from '..';

const steps = [
  {
    id: 'welcome',
    text: [
      `
      Shepherd is a JavaScript library for guiding users through your app.
      It uses <a href="https://atomiks.github.io/tippyjs//">Tippy.js</a>,
      another open source library, to render dialogs for each tour "step".
    `,
      `
      Among many things, Tippy makes sure your steps never end up off screen or cropped by an overflow.
      Try resizing your browser to see what we mean.
    `,
    ],
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'cancel',
        classes: 'shepherd-button-secondary',
        text: 'Exit',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
];
const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
  },
  useModalOverlay: true,
};

describe('<ShepherdTour />', () => {
  it('exists', () => {
    expect(ShepherdTour).toBeTruthy();
  });

  it('renders the component and starts tour', async () => {
    function Button() {
      const tour = useContext(ShepherdTourContext);

      return (
        <button className="button dark" type="button" onClick={tour?.start}>
          Start Tour
        </button>
      );
    }
    function TestApp() {
      return (
        <ShepherdTour steps={steps} tourOptions={tourOptions}>
          <Button />
        </ShepherdTour>
      );
    }

    const container = render(<TestApp />);
    await fireEvent.click(container.getByText(/Start Tour/));

    const cancelBtn = await container.findByText('Exit');
    const nextBtn = await container.findByText('Next');

    expect(cancelBtn).toBeTruthy();
    expect(nextBtn).toBeTruthy();
  });
});
