// import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// const { duotoneLight } = dynamic(
//   () => import('react-syntax-highlighter/dist/esm/styles/prism'),
//   { ssr: false }
// );
import { duotoneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const installString = 'yarn add react-shepherd';
const usageString = `
import React, { Component } from 'react'
import {ShepherdTour, ShepherdTourContext} from 'react-shepherd'
import newSteps from './steps'

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    }
  },
  useModalOverlay: true
};

function Button() {
  const tour = useContext(ShepherdTourContext);

  return (
    <button className="button dark" onClick={tour.start}>
      Start Tour
    </button>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <ShepherdTour steps={newSteps} tourOptions={tourOptions}>
          <Button />
        </ShepherdTour>
      </div>
    );
}
`;

export default function HomePage({children, tourContext}) {
  // const tour = useContext(tourContext);

  return (
      <div>
        <div>
          <div>
            {children}
            <button className="button dark">
              Start Tour
            </button>
            <div>
              <h5>Installation</h5>
              <SyntaxHighlighter
                className="install-element"
                language="javascript"
                style={duotoneLight}
              >
                {installString}
              </SyntaxHighlighter>
            </div>
            <div>
              <h5>Usage</h5>
              {/* <SyntaxHighlighter
                className="usage-element"
                language="javascript"
                style={duotoneLight}
              > */}
                {usageString}
              {/* </SyntaxHighlighter> */}
            </div>
          </div>
        </div>
      </div>
    );
}
