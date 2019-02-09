import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shepherd from 'shepherd.js'

const internalMethods = [
  'back',
  'cancel',
  'complete',
  'hide',
  'next',
  'show',
  'startTour'
]

const ShepherdTourContext = React.createContext()
const ShepherdTourContextConsumer = ShepherdTourContext.Consumer

export class ShepherdTour extends Component {
  static propTypes = {
    children: PropTypes.node,
    confirmCancel: PropTypes.bool,
    confirmCancelMessage: PropTypes.string,
    defaultStepOptions: PropTypes.object,
    tourName: PropTypes.string,
    steps: PropTypes.array,
    useModalOverlay: PropTypes.bool
  }

  constructor(props) {
    super(props)
    window.Shepherd = Shepherd

    this._bindMethods(internalMethods)

    const {
      confirmCancel,
      confirmCancelMessage,
      defaultStepOptions,
      tourName,
      useModalOverlay,
      steps
    } = this.props

    const tourObject = new Shepherd.Tour({
      confirmCancel,
      confirmCancelMessage,
      defaultStepOptions,
      tourName,
      useModalOverlay
    })

    tourObject.on('start', this.onTourStart.bind(this))
    tourObject.on('complete', this.onTourFinish.bind(this), 'complete')
    tourObject.on('cancel', this.onTourFinish.bind(this), 'cancel')

    this.tourObject = tourObject
    this.tourState = {
      disableScroll: false,
      isActive: false,
      startTour: this.startTour
    }

    this.addSteps(steps)
  }

  componentWillUnmount() {
    this._cleanup()
  }

  /**
   * Take a set of steps and create a tour object based on the current configuration
   * @param {Array} steps An array of steps
   * @private
   */
  addSteps(steps) {
    const tour = this.tourObject

    // Return nothing if there are no steps
    if (!steps.length) {
      return []
    }

    steps.forEach((step, index) => {
      const { id, options } = step

      if (options.buttons) {
        options.buttons = options.buttons.map(
          button => {
            const { type, classes, text } = button
            return {
              action: tour[type],
              classes,
              text
            }
          }
        )
      }

      // options.attachTo = normalizeAttachTo(options.attachTo)
      tour.addStep(id, options)

      // Step up events for the current step
      const currentStep = tour.steps[index]

      if (!currentStep.options.scrollToHandler) {
        currentStep.options.scrollToHandler = (elem) => {
          // Allow scrolling so scrollTo works.
          this.tourState.disableScroll.off(window)

          if (typeof elem !== 'undefined') {
            elem.scrollIntoView()
          }

          setTimeout(() => {
            if (this.tourState.disableScroll) {
              this.tourState.disableScroll.on(window)
            }
          }, 50)
        }
      }
    })
  }

  /**
  * Get the tour object and call back
  * @public
  */
  back() {
    this.tourObject.back()
    Shepherd.trigger('back')
  }

  /**
   * Cancel the tour
   * @public
   */
  cancel() {
    this.tourObject.cancel()
  }

  /**
   * Complete the tour
   * @public
   */
  complete() {
    this.tourObject.complete()
  }

  /**
   * Hides the current step
   * @public
   */
  hide() {
    this.tourObject.hide()
  }

  /**
   * Advance the tour to the next step
   * @public
   */
  next() {
    this.tourObject.next()
    Shepherd.trigger('next')
  }

  /**
   * Show a specific step, by passing its id
   * @param id The id of the step you want to show
   * @public
   */
  show(id) {
    this.tourObject.show(id)
  }

  /**
   * Start the tour
   * @public
   */
  startTour() {
    this.tourState.isActive = true
    this.tourObject.start()
  }

  /**
   * When the tour starts, setup the step event listeners, and disableScroll
   */
  onTourStart() {
    if (this.tourState.disableScroll) {
      this.tourState.disableScroll.on(window)
    }

    Shepherd.trigger('start')
  }

  /**
   * This function is called when a tour is completed or cancelled to initiate cleanup.
   * @param {string} completeOrCancel 'complete' or 'cancel'
   */
  onTourFinish(completeOrCancel) {
    this.tourState.isActive = false

    this._cleanup()
    Shepherd.trigger(completeOrCancel)
  }

  /**
   * Take an array of strings and look up methods by name, then bind them to `this`
   * @param {String[]} methods The names of methods to bind
   * @private
   */
  _bindMethods(methods) {
    methods.map((method) => {
      this[method] = this[method].bind(this)
    })
  }

  /**
   * Cleanup disableScroll
   * @private
   */
  _cleanup() {
    if (this.disableScroll) {
      this.tourState.disableScroll.off(window)
    }
  }

  render() {
    return (
      <ShepherdTourContext.Provider value={this.tourState}>
        {this.props.children}
      </ShepherdTourContext.Provider>
    )
  }
}

export { ShepherdTourContextConsumer as TourMethods }
