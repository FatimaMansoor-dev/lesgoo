import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="bg-[#00000054] h-screen overflow-auto lg:block hidden">
      {/* logo + centered heading */}
      <div className="py-[47px] px-8.5 flex flex-col items-center">
        <Image src={'/assets/Renewme-home/svg/logo.svg'} alt="logo" width={193} height={36} />
        {/* optional textual heading (centered) */}
        <h2 className="mt-3 text-white text-[18px] font-medium text-center">RenewMe</h2>
      </div>

      <div>
        <Link
          href={'/user/renewme-home'}
          className="p-[21px_46px] flex items-center justify-start gap-4"
        >
          <Image src={'/assets/Renewme-home/svg/home.svg'} alt="home" width={54} height={54} />
          <span className="text-[24px] text-white font-normal text-left">Home</span>
        </Link>

        <Link
          href={'/user/renewme-home/balance'}
          className="p-[21px_46px] flex items-center justify-start gap-4"
        >
          <Image
            src={'/assets/Renewme-home/svg/side-menu.svg'}
            alt="balance"
            width={54}
            height={54}
          />
          <span className="text-[24px] text-white font-normal text-left">Balance</span>
        </Link>

        <Link
          href={'/user/renewme-home/sleep'}
          className="p-[21px_46px] flex items-center justify-start gap-4"
        >
          <Image
            src={'/assets/Renewme-home/svg/side-menu.svg'}
            alt="sleep"
            width={54}
            height={54}
          />
          <span className="text-[24px] text-white font-normal text-left">Sleep</span>
        </Link>

        <Link
          href={'/user/renewme-home/meditation'}
          className="p-[21px_46px] flex items-center justify-start gap-4"
        >
          <Image
            src={'/assets/Renewme-home/svg/side-menu.svg'}
            alt="meditation"
            width={54}
            height={54}
          />
          <span className="text-[24px] text-white font-normal text-left">Meditation</span>
        </Link>

        <Link
          href={'/user/renewme-home/affirmations'}
          className="p-[21px_46px] flex items-center justify-start gap-4"
        >
          <Image
            src={'/assets/Renewme-home/svg/side-menu.svg'}
            alt="affirmations"
            width={54}
            height={54}
          />
          <span className="text-[24px] text-white font-normal text-left">Affirmations</span>
        </Link>

        <Link
          href={'/user/renewme-home/confidence'}
          className="p-[21px_46px] flex items-center justify-start gap-4"
        >
          <Image
            src={'/assets/Renewme-home/svg/side-menu.svg'}
            alt="confidence"
            width={54}
            height={54}
          />
          <span className="text-[24px] text-white font-normal text-left">Confidence</span>
        </Link>

        <Link
          href={'/user/renewme-home/soulscape'}
          className="p-[21px_46px] flex items-center justify-start gap-4"
        >
          <Image
            src={'/assets/Renewme-home/svg/side-menu.svg'}
            alt="soulscape"
            width={54}
            height={54}
          />
          <span className="text-[24px] text-white font-normal text-left">Soulscape</span>
        </Link>

        <Link
          href={'/user/renewme-home/music'}
          className="p-[21px_46px] flex items-center justify-start gap-4"
        >
          <Image
            src={'/assets/Renewme-home/svg/side-menu.svg'}
            alt="music"
            width={54}
            height={54}
          />
          <span className="text-[24px] text-white font-normal text-left">Music</span>
        </Link>

        <Link
          href={'/user/renewme-home/profile'}
          className="p-[21px_46px] flex items-center justify-start gap-4"
        >
          <Image
            src={'/assets/Renewme-home/svg/profile.svg'}
            alt="profile"
            width={54}
            height={54}
          />
          <span className="text-[24px] text-white font-normal text-left">Profile</span>
        </Link>

        <Link href={'/logout'} className="p-[21px_46px] flex items-center justify-start gap-4">
          <Image src={'/assets/Renewme-home/svg/logout.svg'} alt="logout" width={54} height={54} />
          <span className="text-[24px] text-white font-normal text-left">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
