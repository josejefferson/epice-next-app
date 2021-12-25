import * as React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'df-messenger': React.DetailedHTMLProps<React.string<HTMLElement>, HTMLElement>
    }
  }
}