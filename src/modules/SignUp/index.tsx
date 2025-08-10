import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Checkbox } from 'src/components/ui/checkbox';
import { registerUser } from 'src/services/auth-service';

import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

const SignUp: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    termsIsChecked?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [termsIsChecked, setTermsIsChecked] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (form.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters long';
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.password.trim().length) {
      newErrors.password = 'Password field must not be empty!';
    }
    if (!termsIsChecked) {
      newErrors.termsIsChecked = 'You must agree to the terms and conditions';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const result = await registerUser(form);

    if (!result.errors) {
      router.push('/log-in');
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
            Create an account and balance your life
          </h2>
          <form onSubmit={handleSignup}>
            <div className="mt-5">
              <div className="relative mt-2">
                <User className="text-[#2D1715] min-w-[18px] h-[18px] absolute left-[20px] top-1/2 translate-y-[-50%]" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="What should we call you?"
                  className={`${
                    errors.fullName ? '!border-red-500 focus:!border-red-500' : ''
                  } w-full focus:outline-none text-[#4F3422] font-['Urbanist'] placeholder:text-[14px] placeholder:text-[#848484] border focus:border-[#4F3422] border-[#F9F9F9] p-[20px] h-[45px] bg-[#F9F9F9] rounded-full pl-[52px]`}
                />
              </div>
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
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
            </div>
            <div className="flex items-center gap-3 p-[12px_4.5px] mt-2">
              <Checkbox
                className="rounded-[3px] bg-[#F9F6F6] border-[#E2E2E2] border-[1px] w-[18px] h-[18px] check-main"
                id="terms"
                checked={termsIsChecked}
                onCheckedChange={() => setTermsIsChecked(!termsIsChecked)}
              />
              <label htmlFor="agree" className="text-[#000] text-[10px] font-['Urbanist']">
                I agree to the{' '}
                <Link href="/terms" className="font-bold underline decoration-1 text-[#2B1513]">
                  Terms & Conditions
                </Link>{' '}
                and the{' '}
                <Link href="/privacy" className="font-bold underline decoration-1 text-[#2B1513]">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.termsIsChecked && (
              <p className="text-red-500 text-xs -mt-1 mb-4">{errors.termsIsChecked}</p>
            )}
            <button
              type="submit"
              className="bg-[#A850B2] text-white w-full h-[46px] rounded-[36px] font-['Urbanist'] font-semibold leading-[17px] hover:bg-[#8e3f94]"
            >
              Create account
            </button>
          </form>
        </div>
        <p className="text-[12px] font-medium text-[#424242] font-['Urbanist'] mt-[14px] text-center">
          Already have an account?{' '}
          <button onClick={() => router.push('/log-in')} className="font-bold underline">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
