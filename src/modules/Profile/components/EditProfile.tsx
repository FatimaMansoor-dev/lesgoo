import React, { useState } from "react";

const TitleAndBio = () => {
  const [formData, setFormData] = useState({
    name: "Dr Lisa Palmer",
    title: "PhD, LMFT, CHT, CRRTT",
    about: 'Dr. Lisa C. Palmer, PhD, LMFT, is a renowned psychotherapist, national media personality, and founder of The Renew Center of Florida, which was ranked #1 in the U.S. for PTSD treatment in US. As a tech innovator and the creator of RenewMe, she is on a mission to advance mental health. She is also the first psychotherapist to pioneer wellness technology for brands and their customers.',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // console.log("Saved Data:", formData);
  };
  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out font-['Urbanist']">
      <div className="mb-9 w-full max-w-[375px] pt-[14px]">
        <h2 className="mb-[17px] text-[22px] font-semibold text-center leading-[26px]">Edit Profile</h2>
        <div className="bg-[#FBFBFB] p-[27px_25px]">
          <div className="mb-[23px]">
            <label className="text-[#00000099] text-[14px] font-semibold leading-[17px] mb-2 block">Your name</label>
            <input type="text" name="name"
              value={formData.name}
              onChange={handleChange} className="outline-none border border-[#00000033] focus:border-black p-[15px_14px] text-[14px] rounded-[8px] w-full h-[47px]" />
          </div>
          <div className="mb-[23px]">
            <label className="text-[#00000099] text-[14px] font-semibold leading-[17px] mb-2 block">Profile Title</label>
            <input type="text" name="title"
              value={formData.title}
              onChange={handleChange} className="outline-none border border-[#00000033] focus:border-black p-[15px_14px] text-[14px] rounded-[8px] w-full h-[47px]" />
          </div>
          <div className="mb-[23px]">
            <label className="text-[#00000099] text-[14px] font-semibold leading-[17px] mb-2 block">About me</label>
            <textarea name="about"
              value={formData.about}
              onChange={handleChange} className="outline-none border border-[#00000033] focus:border-black p-[15px_17px] text-[14px] rounded-[8px] w-full h-[180px] resize-none" />
          </div>
          <button onClick={handleSave} className="bg-[#A850B2] hover:bg-[#8e3f94] mt-[27px] rounded-[22px] h-[45px] text-[14px] font-semibold text-center leading-[17px] w-full text-white">Save</button>
        </div>
      </div>
    </div>
  );
};

export default TitleAndBio;
