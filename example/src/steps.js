export default [
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
  },
  {
    id: 'installation',
    options: {
      title: 'Installation',
      text:
        'Installation is simple, if you are using npm, just install like any other package.',
      attachTo: '.install-element bottom',
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
    }
  },
  {
    id: 'usage',
    options: {
      title: 'Usage',
      text: [
        'To use the tour service, simply inject it into your application and use it like this example.'
      ],
      attachTo: '.usage-element bottom',
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
    }
  },
  {
    id: 'modal',
    options: {
      attachTo: {
        element: '.modal-element',
        on: 'top'
      },
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
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: [
        'We implemented true modal functionality by disabling clicking of the rest of the page.',
        "If you would like to enable modal, simply do this.get('tour').set('modal', true)."
      ]
    }
  },
  {
    id: 'centered-example',
    options: {
      title: 'Centered Shepherd Element',
      text: `But attachment is totally optional!\n \
      Without a target, a tour step will create an element that's centered within the view. \
      Check out the <a href="https://shipshapecode.github.io/shepherd/">documentation</a> to learn more.`,
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
    }
  },
  {
    id: 'followup',
    options: {
      title: 'Learn more',
      text: 'Star Shepherd on Github so you remember it for your next project',
      attachTo: '.hero-followup top',
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
  }
];
