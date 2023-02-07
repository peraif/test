import { toast } from 'react-toastify';
import React from 'react';

export const notifyError = (message: string) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: 'error',
  });

export const notifySuccess = (message: string) =>
  toast(<p style={{ fontSize: 16 }}>{message}</p>, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: 'success',
  });
