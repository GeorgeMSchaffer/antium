import React, {Element, PropTypes} from 'react'
import pure from 'recompose/pure'
import {createStyleSheet} from 'jss-theme-reactor'
import classNames from 'classnames'
import Logger from '../../../util/Logger'

type Props = {
  type: ?string,
  children: ?Element<any>
}

export const styleSheet = createStyleSheet('AfSampleGridBox', (theme) => {
  const { breakpoints } = theme

  return {
    box: {
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: '1rem',
      marginBottom: 0,
      background: '#007FFF',
      border: '1px solid #FFF',
      borderRadius: 2,
      overflow: 'hidden',
      textAlign: 'center',
      color: '#fff'
    },
    boxrow: {
      extend: 'box',
      marginBottom: '1rem'
    },
    boxcontainer: {
      extend: 'box',
      boxSizing: 'border-box',
      padding: '.5em'
    },
    boxfirst: {
      background: '#06C',
      borderColor: '#007FFF'
    },
    boxnested: {
      extend: 'box',
      background: '#036',
      borderColor: '#007FFF'
    },
    boxlarge: {
      extend: 'box',
      height: '8rem'
    },
    [breakpoints.up('sm')]: {
      box: { padding: '1rem' },
      boxrow: { padding: '1rem' },
      boxcontainer: { padding: '1rem' },
      boxnested: { padding: '1rem' },
      boxlarge: { padding: '1rem' }
    }
  }
})

const Box = (props: Props, context: { styleManager: Object }) => {
  const classes = context.styleManager.render(styleSheet)
  const type = props.type ? props.type : 'box' // default value
  const allClasses = type.split(' ').map((name) => {
    const resolvedName = name !== 'box' ? `box${name}` : 'box'
    // log.debug('resolvedName', resolvedName)
    return classes[ resolvedName ]
  })
  // log.debug('allClasses', allClasses)
  return (
    <div className={classNames(...allClasses)}>
      {props.children}
    </div>
  )
}

Box.contextTypes = {
  styleManager: PropTypes.object.isRequired
}

const log = Logger.get(Box) // eslint-disable-line

export default pure(Box)