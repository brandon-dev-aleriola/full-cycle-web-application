import React, { useState } from 'react';

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Snackbar from '@mui/material/Snackbar';

import CloseIcon from '@mui/icons-material/Close';

export default function LoginPage() {
  const [alertVis, setAlertVis] = useState(false);
  const [toastVis, setToastVis] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setAlertVis(true);
    console.group('-- Form Data --');
    console.log('email: ', data.get('email'));
    console.log('password: ', data.get('password'));
    console.groupEnd();
  };

  // <Alert
  //   action={
  //     <IconButton
  //       onClick={() => { setAlertVis(false) }}
  //     >
  //       <CloseIcon fontSize="inherit" />
  //     </IconButton>
  //   }
  //   severity="success"
  // >
  //   Login Successful
  // </Alert>

  // <Collapse in={alertVis}>
  //   <Alert severity="success">
  //     <AlertTitle>Login Successful</AlertTitle>
  //     Good job homie, you logged in.
  //   </Alert>
  // </Collapse>



  return (
    <>
      {/* <Snackbar
        autoHideDuration={6000}
        onClose={setAlertVis(false)}
        open={alertVis}
      >
        <Alert onClose={setAlertVis(false)} severity="success" sx={{ width: '100%' }}>
          Login Successful
        </Alert>
      </Snackbar> */}
      <Container component="main" maxWidth="xs" style={{ border: '1px solid #FF0000' }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}