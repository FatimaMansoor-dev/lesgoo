import { useState } from 'react';

export default function BrevoForm({ onClose }: { onClose: () => void }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/addSubscriber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email }),
      });

      if (response.ok) {
        setFormStatus('Thank you for subscribing!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setFormStatus('');
        onClose();
      } else {
        const errorData: { message?: string } = await response.json();
        setFormStatus(errorData.message ?? 'An error occurred. Please try again.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="pt-4 md:pt-8">
      <div className="mb-4">
        <h2 className="text-[22px] sm:text-[25px] lg:text-[29px] font-medium max-w-[400px]">
          Welcome to RenewMe!
        </h2>
        <p className="text-zinc-500">Begin your journey to a more balanced life...</p>
      </div>
      <label className="block text-gray-800 mb-2">First Name</label>
      <input
        type="text"
        placeholder="Enter your first name..."
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
      />
      <label className="block text-gray-800 mb-2">Last Name</label>
      <input
        type="text"
        placeholder="Enter your last name..."
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
      />
      <label className="block text-gray-800 mb-2">Email</label>
      <input
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
      />
      <p className="text-zinc-400 font-normal mb-6">Example: juan.delacruz@gmail.com</p>
      {formStatus && <p className="text-sm mb-4">{formStatus}</p>}
      <div className="mt-auto pb-4 md:pb-8 flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-[#00C6C9] hover:bg-[#358880] text-white py-2 px-6 rounded-full transition-all duration-300 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
