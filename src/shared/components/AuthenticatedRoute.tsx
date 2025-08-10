import React from 'react';
import { useEffectOnce } from 'react-use';

import { useAuthStore } from 'shared/store/Auth';

const AuthenticatedRoute: React.FC<{ children: any }> = ({ children }) => {
  const verify = useAuthStore(state => state.verify);

  useEffectOnce(() => {
    verify();
  });

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthenticatedRoute;
