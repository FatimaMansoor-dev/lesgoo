import { DialogClose } from '@radix-ui/react-dialog';
import Privacy from 'modules/Privacy';
import Terms from 'modules/Terms';
import { FC, ReactNode, useEffect, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Button } from 'src/components/ui/button';
import { Checkbox } from 'src/components/ui/checkbox';
import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';

interface CustomDialogProps {
  isOpen: boolean;
  children: ReactNode;
}

export const CustomDialog: FC<CustomDialogProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex h-fit min-w-[30vw] gap-0 rounded-xl bg-white p-0 text-xs m-4 lg:m-0">
        {children}
      </div>
    </div>
  );
};

export const TermsDialog = ({
  popoverTermsIsOpened,
  setPopoverTermsisOpened,
  termsIsChecked,
  setTermsIsChecked,
}: {
  popoverTermsIsOpened: boolean;
  setPopoverTermsisOpened: (value: boolean) => void;
  termsIsChecked: boolean;
  setTermsIsChecked: (value: boolean) => void;
}) => {
  const [hasVisited, setHasVisited] = useState(false);

  // Enter RenewMe Function
  const handleEnterRenewMe = () => {
    setPopoverTermsisOpened(false);
    // Set hasVisited to true
    localStorage.setItem('hasVisited', 'true');
  };

  // If user has visited before, set hasVisited to true
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setHasVisited(true);
    }
  }, []);

  if (!hasVisited && !popoverTermsIsOpened) {
    return (
      <CustomDialog isOpen={popoverTermsIsOpened}>
        <div className="m-0 flex h-screen w-fit lg:max-w-[40vw] gap-0 rounded-xl bg-white p-0 text-xs">
          <div className="relative md:basis-[40%]">
            <div className="absolute bottom-0 z-10 m-4 hidden rounded-lg bg-white p-2 font-['Gilroy'] shadow-2xl md:block">
              <h1 className="font-semibold">Dr. Lisa Palmer</h1>
              <p className="text-[#3A3A3B]">
                Founder @ <span>Renew</span>
                <span className="text-[#3A3A3B]">Me</span>
              </p>
            </div>

            <Image
              fill
              className="hidden rounded-xl object-cover md:block"
              src={`${imageDomainUrl}/Code/lisa-photo-1.png`}
              alt="Lisa"
            />
          </div>
          <div className="flex h-full basis-full flex-col justify-between p-6 font-['Gilroy'] md:basis-[60%]">
            <div>
              <div className="flex flex-row-reverse justify-between md:flex-col">
                <Image
                  src={`${imageDomainUrl}/Code/renewme-icon.png`}
                  alt="RenewMe Logo"
                  className="mb-4 h-14 w-14"
                  width={2560}
                  height={1024}
                />
                <Image
                  src={`${imageDomainUrl}/Code/hey-there.png`}
                  alt="RenewMe Logo"
                  className="h-16 w-32 md:h-20 md:w-44"
                  width={2560}
                  height={1024}
                />
              </div>
              <div>
                <p className="mb-4">Welcome!</p>
                <p className="mb-4 leading-5">
                  Your well-being is super important to us! Check out RenewMe for a dose of
                  mindfulness and motivation while you enjoy your day. Let us know what you think,
                  and join us in spreading mental health awareness worldwide.
                </p>
                <p className="mb-4">Cheers to a more balanced world!</p>

                <div className="mb-4 flex items-center gap-2 md:hidden">
                  <Image
                    src={`${imageDomainUrl}/Code/lisa-photo-2.png`}
                    alt="Lisa"
                    className="h-8 w-8 rounded-full"
                    width={2560}
                    height={1024}
                  />
                  <div>
                    <h1 className="font-semibold">Dr. Lisa Palmer</h1>
                    <p className="text-[#3A3A3B]">
                      Founder @ <span>Renew</span>
                      <span className="text-[#3A3A3B]">Me</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <>
                <div className="mb-4 h-[0.5px] w-full bg-zinc-200"></div>
                <div className="items-top mb-4 flex space-x-2">
                  <Checkbox
                    className="rounded-md"
                    id="terms1"
                    checked={termsIsChecked}
                    onCheckedChange={() => setTermsIsChecked(!termsIsChecked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                    <p className="text-xs text-muted-foreground">
                      You agree to our {/* Terms of Service */}
                      <Dialog>
                        <DialogTrigger className="underline">Terms of Service</DialogTrigger>
                        <DialogContent className="bg-white max-w-[100vw] md:max-w-[80vw] max-h-[100vw] md:max-h-[40vw] overflow-y-auto rounded-2xl border-transparent">
                          <section className="relative">
                            <Terms className="p-0" />
                            <DialogClose asChild>
                              <section className="sticky flex gap-2 bottom-0">
                                <Button
                                  className="w-full font-['Gilroy'] hover:bg-zinc-800 drop-shadow-2xl"
                                  variant="default"
                                  onClick={() => {
                                    setTermsIsChecked(true);
                                  }}
                                >
                                  I Agree
                                </Button>
                                <Button
                                  className="w-full font-['Gilroy'] drop-shadow-2xl"
                                  variant="outline"
                                >
                                  Close
                                </Button>
                              </section>
                            </DialogClose>
                          </section>
                        </DialogContent>
                      </Dialog>{' '}
                      and {/* Privacy Policy */}
                      <Dialog>
                        <DialogTrigger className="underline">Privacy Policy.</DialogTrigger>
                        <DialogContent className="bg-white max-w-[100vw] md:max-w-[80vw] max-h-[100vw] md:max-h-[40vw] overflow-y-auto rounded-2xl border-transparent">
                          <section className="relative">
                            <Privacy className="p-0" />
                            <DialogClose asChild>
                              <section className="sticky flex gap-2 bottom-0">
                                <Button
                                  className="w-full font-['Gilroy'] hover:bg-zinc-800 drop-shadow-2xl"
                                  variant="default"
                                  onClick={() => {
                                    setTermsIsChecked(true);
                                  }}
                                >
                                  I Agree
                                </Button>
                                <Button
                                  className="w-full font-['Gilroy'] drop-shadow-2xl"
                                  variant="outline"
                                >
                                  Close
                                </Button>
                              </section>
                            </DialogClose>
                          </section>
                        </DialogContent>
                      </Dialog>
                    </p>
                  </div>
                </div>
              </>

              <Button
                className="mb-4 w-full rounded-xl bg-[#00C6C9] hover:bg-[#00C6C9]/80"
                disabled={!termsIsChecked && !hasVisited}
                onClick={() => {
                  handleEnterRenewMe();
                }}
              >
                Enter RenewMe
              </Button>
              <div className="flex w-full items-center justify-center">
                <p className="mb-4 w-64 text-center text-xs leading-4 text-zinc-400">
                  Join our global community supporting a mission of life balance.{' '}
                </p>
              </div>

              <div className="flex w-full flex-col justify-between text-center text-xs text-zinc-400 md:flex-row">
                <a href="https://www.myrenewme.com/" target="_blank" rel="noreferrer">
                  www.myrenewme.com
                </a>
                <p>Live Better. Be Balanced</p>
              </div>
            </div>
          </div>
        </div>
      </CustomDialog>
    );
  }

  return null;
};
