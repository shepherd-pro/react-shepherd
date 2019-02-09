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
        (Try resizing your browser to see what we mean.)
      `,
        `
        It also offers a robust API for styling animations of steps
        as they enter and exit the view.
      `
      ],
      attachTo: '.hero-welcome bottom',
      classes: 'shepherd shepherd-welcome',
      buttons: [
        {
          type: 'cancel',
          classes: 'shepherd-button-secondary',
          text: 'Exit'
        }, {
          type: 'next',
          text: 'Next'
        }
      ]
    }
  },
  {
    id: 'including',
    options: {
      title: 'Including',
      text: 'Including Shepherd is easy! Just include tippy.all.min.js, shepherd.js, and a Shepherd theme file.',
      attachTo: '.hero-including bottom',
      buttons: [
        {
          type: 'back',
          classes: 'shepherd-button-secondary',
          text: 'Back'
        }, {
          type: 'next',
          text: 'Next'
        }
      ]
    }
  },
  {
    id: 'creating',
    options: {
      title: 'Creating a Shepherd Tour',
      text: `Creating a Shepherd tour is easy. too!\
      Just create a \`Tour\` instance, and add as many steps as you want.`,
      attachTo: '.hero-example bottom',
      buttons: [
        {
          type: 'back',
          classes: 'shepherd-button-secondary',
          text: 'Back'
        }, {
          type: 'next',
          text: 'Next'
        }
      ]
    }
  },
  {
    id: 'attaching',
    options: {
      title: 'Attaching to Elements',
      text: `Your tour steps can target and attach to elements in DOM (like this step).`,
      attachTo: '.hero-example bottom',
      buttons: [
        {
          type: 'back',
          classes: 'shepherd-button-secondary',
          text: 'Back'
        }, {
          type: 'next',
          text: 'Next'
        }
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
        }, {
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
        }, {
          type: 'next',
          text: 'Done'
        }
      ]
    }
  }
]
