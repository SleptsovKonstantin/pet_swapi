import { useState } from 'react'
import ErrorMessage from '@components/ErrorMessage'

export const withErrorApi = (Viev) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false)

    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <Viev setErrorApi={setErrorApi} {...props} />
        )}
      </>
    )
  }
}
