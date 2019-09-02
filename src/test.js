import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ShepherdTour, TourMethods } from './';

const steps = [
  {
    id: 'welcome',
    options: {
      text: [
        `
        Shepherd is a JavaScript library for guiding users through your app.
        It uses <a href="https://atomiks.github.io/tippyjs//">Tippy.js</a>,
        another open source library, to render dialogs for each tour "step".
      `,
        `
        Among many things, Tippy makes sure your steps never end up off screen or cropped by an overflow.
        Try resizing your browser to see what we mean.
      `
      ],
      attachTo: '.hero-welcome bottom',
      classes: 'shepherd shepherd-welcome',
      buttons: [
        {
          type: 'cancel',
          classes: 'shepherd-button-secondary',
          text: 'Exit'
        },
        {
          type: 'next',
          text: 'Next'
        }
      ]
    }
  }
];
const defaultStepOptions = { showCancelLink: true };
const useModalOverlay = true;

// function Content() {
//   return (
//     <div>
//       <HomePage>
//         <TourMethods>
//           {({ startTour }) => (
//             <button className="button dark" onClick={startTour}>
//               Start Tour
//             </button>
//           )}
//         </TourMethods>
//       </HomePage>
//     </div>
//   );
// }

describe('<ShepherdTour />', () => {
  it('exists', () => {
    expect(ShepherdTour).toBeTruthy();
  });

  it('renders the component', () => {
    const container = render(
      <ShepherdTour
        defaultStepOptions={defaultStepOptions}
        steps={steps}
        useModalOverlay={useModalOverlay}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
