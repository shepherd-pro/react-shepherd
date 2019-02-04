import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shepherd from 'shepherd.js'

import styles from './styles.css'

export default class ShepherdTour extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.tour = { tour: new Shepherd.Tour() }
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}
