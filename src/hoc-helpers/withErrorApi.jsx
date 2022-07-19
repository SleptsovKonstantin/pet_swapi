import { useState } from 'react'

export const withErrorApi = (Viev) => {
  return (props) => {
    const [errorApi, setErrorApi] = useState(false)

    return (
      <>
        {errorApi ? (
          <h2>Errror</h2>
        ) : (
          <Viev setErrorApi={setErrorApi} {...props} />
        )}
      </>
    )
  }
}
