import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { signInUser } from 'src/services/auth-service';

import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const SignIn: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.email.trim().length) {
      newErrors.email = 'Email field must not be empty';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.password.trim().length) {
      newErrors.password = 'Password field must not be empty';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    if (!validate()) return;
    const result = await signInUser(form);

    if (result.errors) {
      setApiError(result.errors);
    } else {
      const user = result.user;

      if (user) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            id: user.id,
            email: user.email,
            fullName: user.fullName,
          })
        );
        user.authToken && localStorage.setItem('authToken', user.authToken);

        router.push('/meditations');
      }
    }
  };

  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out">
      <div className="max-w-[375px] mx-auto w-full relative px-[20px] mt-[72px]">
        <div className="flex flex-col items-center">
          <Image
            src={`${imageDomainUrl}/Meditations/Icon/meditation-logo.svg`}
            width={71.44}
            height={71.44}
            alt="meditation-logo"
          />
        </div>
        <div className="mt-[53.56px]">
          <h2 className="text-[24px] font-bold leading-[28px] font-['Urbanist'] text-center">
            Sign In to your account
          </h2>
          {apiError && <p className="text-red-500 text-sm mt-2 text-center">{apiError}</p>}
          <form onSubmit={handleSignin} className="mt-5">
            <div className="relative mt-2">
              <Mail className="text-[#2D1715] min-w-[18px] h-[18px] absolute left-[20px] top-1/2 translate-y-[-50%]" />
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your e-mail"
                className={`${
                  errors.email ? '!border-red-500 focus:!border-red-500' : ''
                } w-full focus:outline-none text-[#4F3422] font-['Urbanist'] placeholder:text-[14px] placeholder:text-[#848484] border focus:border-[#4F3422] border-[#F9F9F9] p-[20px] h-[45px] bg-[#F9F9F9] rounded-full pl-[52px]`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            <div className="relative mt-2">
              <Lock className="text-[#2D1715] min-w-[18px] h-[18px] absolute left-[20px] top-1/2 translate-y-[-50%]" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password..."
                className={`${
                  errors.password ? '!border-red-500 focus:!border-red-500' : ''
                } w-full focus:outline-none text-[#4F3422] font-['Urbanist'] placeholder:text-[14px] placeholder:text-[#848484] border focus:border-[#4F3422] border-[#F9F9F9] p-[20px] h-[45px] bg-[#F9F9F9] rounded-full pl-[52px]`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#848484] focus:outline-none absolute right-[13.5px] top-1/2 translate-y-[-50%]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            <button
              type="submit"
              className="bg-[#A850B2] mt-[11px] text-white w-full h-[46px] rounded-[36px] font-['Urbanist'] font-semibold leading-[17px] hover:bg-[#8e3f94]"
            >
              Sign In
            </button>
          </form>
        </div>
        <p className="text-[12px] font-medium text-[#424242] font-['Urbanist'] mt-[14px] text-center">
          Don&apos;t have an account?{' '}
          <button onClick={() => router.push('/sign-up')} className="font-bold underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
