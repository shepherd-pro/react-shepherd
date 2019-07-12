import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

const installString = 'yarn add react-shepherd'
const usageString = `
import React, { Component } from 'react'
import {ShepherdTour, TourMethods} from 'react-shepherd'
import newSteps from './steps'

const defaultStepOptions = { showCancelLink: true };
const useModalOverlay = true;

export default class App extends Component {
  render() {
    return (
      <div>
        <ShepherdTour
          defaultStepOptions={defaultStepOptions}
          steps={newSteps}
          useModalOverlay={useModalOverlay}
        >
          <div>Example Tour</div>
        </ShepherdTour>
      </div>
    );
  }
}
`;

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            {this.props.children}
            <div>
              <h5>Installation</h5>
              <SyntaxHighlighter
                className='install-element'
                language="javascript"
                style={duotoneLight}
              >
                {installString}
              </SyntaxHighlighter>
            </div>
            <div>
              <h5>Usage</h5>
              <SyntaxHighlighter
                className='usage-element'
                language="javascript"
                style={duotoneLight}
              >
                {usageString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
