# react-shepherd

<a href="https://shipshape.io/"><img src="http://i.imgur.com/DWHQjA5.png" alt="Ship Shape" width="100" height="100"/></a>

**[react-shepherd is built and maintained by Ship Shape. Contact us for web app consulting, development, and training for your project](https://shipshape.io/)**.

[![NPM](https://img.shields.io/npm/v/react-shepherd.svg)](https://www.npmjs.com/package/react-shepherd)
[![Build Status](https://travis-ci.org/shipshapecode/react-shepherd.svg)](https://travis-ci.org/shipshapecode/react-shepherd)
[![Code Climate](https://codeclimate.com/github/shipshapecode/react-shepherd/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/react-shepherd)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/react-shepherd/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/react-shepherd/coverage)
[![Greenkeeper badge](https://badges.greenkeeper.io/shipshapecode/react-shepherd.svg)](https://greenkeeper.io/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a React wrapper for the [Shepherd](https://github.com/shipshapecode/shepherd), site tour, library.
It provides additional functionality, on top of Shepherd, as well.

## Install

```bash
npm install --save react-shepherd
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-shepherd'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## Configuration

The following configuration options for a tour can be set on the ShepherdTour to control the way that Shepherd is used.
**The only required option is `steps`, which is an array passed to the props.**

### confirmCancel
`PropTypes.bool`
When set to `true` it will pop up a native browser confirm window on cancel, to ensure you want to cancel.

### confirmCancelMessage
`PropTypes.string`
A string to display in the confirm dialog when `confirmCancel` is set to true.

### defaultStepOptions
`PropTypes.object`
Used to set the options that will be applied to each step by default. You can pass in any of the options that you can with Shepherd.

> **default value:** `{}`

### tourName
`PropTypes.string`
A string name for the tour that will also be set as an ID to help with identifying unique tours.

### steps
`PropTypes.array`
You must pass an array of steps to `steps`, something like this:

```js
const steps = [
  {
    id: 'intro',
    options: {
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
    }
  },
  ...
]);
```

### useModalOverlay
`PropTypes.boo`
A value that should be set to true, if you would like the rest of the screen, other than the current element,
greyed out, and the current element highlighted. If you do not need modal functionality, you can remove this option or set it to false.

> **default value:** `false`

## Steps

The options are the same as Shepherd [options](https://shipshapecode.github.io/shepherd/#steps).

## License

MIT
