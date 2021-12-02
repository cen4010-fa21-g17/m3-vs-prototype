import { createContext, useState, useEffect } from 'react'
import SnackBar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


export const SnackBarContext = createContext()

export default function SnackBarProvider({ children }) {
  const [alert, setAlert] = useState({})
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const showAlert = (severity, message) => {
      console.log('alert set')
      setAlert({
          severity: severity,
          message: message
      })
      console.log(alert)
      setOpen(true)
  }


  return (
    <SnackBarContext.Provider value={{ showAlert }}>
      {children}
      {/* {alerts.map((alert) => <SnackBar key={alert}>{alert}</SnackBar>)} */}
      <SnackBar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" severity={alert.severity} onClose={handleClose} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </SnackBar>
    </SnackBarContext.Provider>
  )
}