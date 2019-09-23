# react-shepherd

<div>
  <a href="https://shipshape.io">
    <img align="left" src="http://i.imgur.com/DWHQjA5.png" alt="Ship Shape" width="50" height="50"/>
  </a>

  **[react-shepherd is built and maintained by Ship Shape. Contact us for web app consulting, development, and training for your project](https://shipshape.io/)**.
</div>

[![NPM](https://img.shields.io/npm/v/react-shepherd.svg)](https://www.npmjs.com/package/react-shepherd)
[![Build Status](https://travis-ci.org/shipshapecode/react-shepherd.svg)](https://travis-ci.org/shipshapecode/react-shepherd)
[![Maintainability](https://api.codeclimate.com/v1/badges/d5273e1d465352a6df4e/maintainability)](https://codeclimate.com/github/shipshapecode/react-shepherd/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d5273e1d465352a6df4e/test_coverage)](https://codeclimate.com/github/shipshapecode/react-shepherd/test_coverage)
[![Greenkeeper badge](https://badges.greenkeeper.io/shipshapecode/react-shepherd.svg)](https://greenkeeper.io/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a React wrapper for the [Shepherd](https://github.com/shipshapecode/shepherd), site tour, library.
It's mainly a wrapper around the Shepherd library that exposes the tour object and methods to the context object
that can be passed into props for dynamic interactivity.

## Install

```bash
npm install --save react-shepherd
```

## Usage

```jsx
import React, { Component } from 'react';
import { ShepherdTour, TourMethods } from 'react-shepherd';
import steps from './steps';

const tourOptions = {
  defaultStepOptions: { showCancelLink: true },
  useModalOverlay: true
};

class App extends Component {
  render() {
    return (
      <div>
        <ShepherdTour steps={steps} tourOptions={tourOptions}>
          <TourMethods>
            {(tourContext) => (
              <button className="button dark" onClick={tourContext.start}>
                Start Tour
              </button>
            )}
          </TourMethods>
        </ShepherdTour>
      </div>
    );
}
```

## Configuration

The following configuration options for a tour can be set on the ShepherdTour to control the way that Shepherd is used. This is simply a POJO passed to Shepherd to use the options noted in the Shepherd Tour [options](https://shepherdjs.dev/docs/Tour.html).
**The only required option is `steps`, which is an array passed to the props.**

### tourOptions
`PropTypes.object`
Used to set the options that will be applied to each step by default. You can pass in any of the options that you can with Shepherd.

### steps
`PropTypes.array`
You must pass an array of steps to `steps`, something like this:

```js
const steps = [
  {
    id: 'intro',
      attachTo: '.first-element bottom',
      beforeShowPromise: function() {
        return new Promise(function(resolve) {
          setTimeout(function() {
            window.scrollTo(0, 0);
            resolve();
          }, 500);
        });
      },
      buttons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: false,
      showCancelLink: true,
      title: 'Welcome to React-Shepherd!',
      text: ['React-Shepherd is a JavaScript library for guiding users through your React app.'],
      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step');
        }
      }
  },
  ...
]);
```

## Steps

The options are the same as Shepherd [options](https://shepherdjs.dev/docs/Step.html).

## License

MIT
