import { Dialog, DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import ConnectAudience from 'modules/SignUp/ConnectAudience';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { X } from 'lucide-react';

import LoginForm from './LoginForm';

interface LoginAuthProps {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (value: boolean) => void;
  setAuth: (value: boolean) => void;
  setOpen: (value: boolean) => void;
}

const LoginAuth: React.FC<LoginAuthProps> = ({
  isAuthModalOpen,
  setIsAuthModalOpen,
  setAuth,
  setOpen,
}) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div>
      <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
        <DialogOverlay className="fixed inset-0 bg-black/40 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogContent className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[1563px] data-closed:sm:translate-y-0 data-closed:sm:scale-95 sm:mx-4">
              <div className="bg-[#F8F8F8] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative h-[94vh] overflow-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-[25px] lg:gap-[20px] 2xl:gap-[32.5px] py-[66px] lg:py-[0px] px-[23px] 2xl:px-[0px] 2xl:pl-[92px] 2xl:pr-[98px] h-full 2xl:h-auto">
                  <button
                    onClick={() => {
                      setIsAuthModalOpen(false);
                      setOpen(false);
                    }}
                    className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px] bg-[#D9D9D9] rounded-full size-[24px] lg:size-[30px] xl:size-[50px] flex justify-center items-center cursor-pointer"
                  >
                    <X className="text-black size-[14px] lg:size-[18px] xl:size-auto" />
                  </button>
                  <ConnectAudience />
                  <div className="order-1 lg:order-2 flex items-center lg:w-1/2 2xl:w-auto">
                    <div className="bg-[#ffffff] rounded-[28px] pt-[50px] pb-[23px] xl:py-[60px] 2xl:py-[126px] px-[23px] xl:px-[30px] 2xl:px-[47px] flex flex-col gap-[30px] sm:gap-[41px]">
                      <div className="flex flex-col items-center gap-[5px] sm:gap-[12px] xl:gap-[17px]">
                        <div className="text-[20px] sm:text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold leading-[28px] text-center font-['Gilroy']">
                          Create a free account to save your preferences
                        </div>
                        <div className="sm:text-[20px] xl:leading-[28px] font-['Gilroy'] text-center sm:text-left">
                          Don’t have a Renewme account?
                          <span
                            onClick={() => {
                              setAuth(true);
                              setIsAuthModalOpen(false);
                            }}
                            className="text-[#0066FF] cursor-pointer underline ml-1 font-['Gilroy'] "
                          >
                            Sign up
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsLoginModalOpen(true)}
                        className="bg-[#A850B2] rounded-full text-[#ffffff] py-[13px] xl:py-[16px] 2xl:py-[21.5px] flex items-center justify-center gap-[20px] cursor-pointer"
                      >
                        <div className="">
                          <Image
                            src={'/assets/Home/svg/mail.svg'}
                            alt="mail"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="font-['Gilroy'] text-[15px] sm:text-[20px] xl:text-[22px] font-semibold xl:leading-[26px]">
                          Sign In with Email
                        </div>
                      </button>
                      <div className="text-[15px] xl:text-[17px] xl:leading-[24px] text-center font-['Gilroy']">
                        By clicking Continue, you agree to our{' '}
                        <Link href="/terms" className="text-[#0066FF] cursor-pointer underline font-['Gilroy']">Terms</Link> and
                        acknowledge that you have read our{' '}
                        
                        <Link href="/privacy" className="text-[#0066FF] cursor-pointer underline font-['Gilroy']">
                          Privacy Policy
                        </Link>
                        , which explains how to opt out of offers and promos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </div>
        </div>
      </Dialog>
      <LoginForm
        isLoginModalOpen={isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
        setAuth={setAuth}
        setOpen={setOpen}
      />
    </div>
  );
};

export default LoginAuth;
