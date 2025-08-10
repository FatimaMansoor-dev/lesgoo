
import React, { useState } from 'react';
import Auth from 'modules/SignUp/Auth';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

// eslint-disable-next-line @typescript-eslint/require-await

const LoginPage: NextPage = () => {
    const router = useRouter();
  const [open, setOpen] = useState(true);

  // When modal closes, redirect to home (or previous page)
  const handleClose = (value: boolean) => {
    setOpen(value);
    if (!value) {
      router.push('/');
    }
  };
  return <Auth open={open} setOpen={handleClose} />;
 
};

export default LoginPage;
