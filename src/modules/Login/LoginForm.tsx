import { Dialog, DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { signInUser } from 'src/services/auth-service';
import { useAuthStore } from 'src/shared/store/Auth';

interface LoginFormProps {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (isOpen: boolean) => void;
  setAuth: (auth: any) => void;
  setOpen: (isOpen: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  isLoginModalOpen,
  setIsLoginModalOpen,
  setAuth,
  setOpen,
}) => {
  const router = useRouter();
  const setUser = useAuthStore(state => state.setUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(undefined);
    setIsLoading(true);

    try {
      const response = await signInUser({ email, password });

      if (response.errors) {
        setError(response.errors);
      } else if (response.user) {
        // Store user data in Zustand store
        setUser(response.user);

        // Close modals
        setIsLoginModalOpen(false);
        setOpen(false);

        // Redirect to tablet app
        window.location.href = `${router.basePath}/user/renewme-home`;
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoginModalOpen && (
        <Dialog open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen}>
          <DialogOverlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogContent className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                <div className="bg-[linear-gradient(180deg,#963EA0_0%,_#4D1753_100%)] md:max-w-[737px] md:w-full">
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[#00000070] md:px-[29px] px-[24px] md:pt-[52px] pt-[62px] pb-[97px] max-w-[372px] md:max-w-[469px] shadow-xl mx-auto"
                  >
                    <Image
                      src={'/assets/Home/svg/logo-white.svg'}
                      alt="whitelogo"
                      className="mx-auto md:h-[35px] h-[23px]"
                      width={182}
                      height={35}
                    />
                    <div className="flex flex-col gap-[14px] md:mt-[47.11px] mt-[27px]">
                      <p className="text-white text-center text-lg md:text-[24px] font-medium font-gilroy">
                        Log in to your Renewme account
                      </p>
                      <p className="text-white text-center md:text-[20px] text-base font-gilroy">
                        Continue below
                      </p>
                    </div>

                    {error && <div className="text-red-400 text-center mt-4">{error}</div>}

                    <div className="flex flex-col gap-[27px] md:pt-[48px] pt-[27px]">
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Enter your e-mail"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="w-full py-3 px-4 md:pl-[58px] pl-[50px] md:h-[70px] h-[50px] rounded-full bg-[#00000033] border border-[#ffffff33] text-white placeholder-[#C0C0C0] focus:outline-none md:text-[22px] text-lg font-medium font-gilroy"
                          required
                        />
                        <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Image
                            src={'/assets/Home/svg/mail2.svg'}
                            alt="mail2"
                            width={24}
                            height={24}
                            className="md:w-[24px] w-4"
                          />
                        </span>
                      </div>

                      <div className="relative">
                        <input
                          type="password"
                          placeholder="Enter password..."
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          className="w-full py-3 px-4 md:pl-[58px] pl-[50px] md:h-[70px] h-[50px] rounded-full bg-[#00000033] border border-[#ffffff33] text-white placeholder-[#C0C0C0] focus:outline-none md:text-[22px] text-lg font-medium font-gilroy"
                          required
                        />
                        <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Image
                            src={'/assets/Home/svg/lock.svg'}
                            alt="lock"
                            width={24}
                            height={24}
                            className="md:w-[24px] w-4"
                          />
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full mt-[27px] py-3 bg-white rounded-full md:text-[22px] text-lg font-semibold hover:opacity-90 transition md:h-[69px] h-[46px] flex items-center justify-center cursor-pointer font-gilroy disabled:opacity-50"
                    >
                      {isLoading ? 'Signing in...' : 'Continue'}
                    </button>
                    <p className="text-white text-[18px] font-medium text-center mt-[27px] font-gilroy">
                      {"Don't have a Renewme account?"}
                      <a
                        onClick={() => {
                          setIsLoginModalOpen(false);
                          setAuth(true);
                        }}
                        className="underline font-bold ml-1 font-gilroy cursor-pointer"
                      >
                        Sign Up
                      </a>
                    </p>
                  </form>
                </div>
              </DialogContent>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default LoginForm;
