export default [
  {
    id: 'welcome',
    text: [
      `
      <p>
      Shepherd is a JavaScript library for guiding users through your app.
      It uses <a href="https://popper.js.org/">Popper.js</a>,
      another open source library, to render dialogs for each tour "step".
      </p>

      <p>
      Among many things, Popper makes sure your steps never end up off screen or
      cropped by an overflow. (Try resizing your browser to see what we mean.)
      </p>
      `
    ],
    attachTo: { element: '.hero-welcome', on: 'bottom' },
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
    ],
    useModalOverlay: true
  },
  {
    id: 'installation',
    title: 'Installation',
    text:
      'Installation is simple, if you are using npm or yarn, just install like any other package.',
    attachTo: { element: '.install-element', on: 'bottom' },
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        type: 'next',
        text: 'Next'
      }
    ]
  },
  {
    id: 'usage',
    title: 'Usage',
    text: [
      'To use the tour service, simply inject it into your application and use it like this example.'
    ],
    attachTo: { element: '.usage-element', on: 'bottom' },
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        type: 'next',
        text: 'Next'
      }
    ]
  },
  {
    id: 'centered-example',
    title: 'Centered Shepherd Element',
    text: `But attachment is totally optional!\n \
    Without a target, a tour step will create an element that's centered within the view. \
    Check out the <a href="https://shepherdjs.dev/docs/">documentation</a> to learn more.`,
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        type: 'next',
        text: 'Next'
      }
    ]
  },
  {
    id: 'followup',
    title: 'Learn more',
    text: 'Star Shepherd on Github so you remember it for your next project',
    attachTo: { element: '.hero-followup', on: 'top' },
    scrollTo: true,
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back'
      },
      {
        type: 'next',
        text: 'Done'
      }
    ]
  }
];
