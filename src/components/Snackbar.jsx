import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { hideSnackbar } from '../store/slices/uiSlice';

const CustomSnackbar = () => {
  const dispatch = useAppDispatch();
  const { snackbarOpen, snackbarMessage, snackbarSeverity } = useAppSelector((state) => state.ui);

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={snackbarSeverity}
        sx={{ width: '100%' }}
      >
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
