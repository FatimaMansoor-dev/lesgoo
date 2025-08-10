import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

// import useProfileStore from 'shared/store/useProfileStore';

// import { fetchProfileDetails } from 'src/services/user-service';

// import { Loader2 } from 'lucide-react';

interface MenuItem {
  id: number;
  label: string;
  icon: string;
  route?: string;
  textColor?: string;
  action?: () => void;
}

const Dashboard: React.FC = () => {
  const router = useRouter();
  // const { profile, setProfile } = useProfileStore();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadProfile = async () => {
  //     if (!profile) {
  //       const data = await fetchProfileDetails();
  //       if (data && !data.errors) {
  //         setProfile(data);
  //       }
  //     }
  //     setLoading(false);
  //   };

  //   loadProfile();
  // }, [profile, setProfile]);

  // if (loading) {
  //   return (
  //     <section className="flex w-screen items-center justify-center text-[#00C0C5]">
  //       <Loader2 className="h-12 w-12 animate-spin" />
  //     </section>
  //   );
  // }

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    router.push('/log-in');
  };

  const menuItems: MenuItem[] = [
    { id: 1, label: 'Title and Bio', icon: 'profile.svg', route: '/profile/edit-profile' },
    { id: 2, label: 'Contact Details', icon: 'contact.svg', route: '/profile/contact-details' },
    { id: 3, label: 'Companies', icon: 'companies.svg', route: '/profile/companies' },
    { id: 4, label: 'Socials', icon: 'social.svg', route: '/profile/socials' },
  ];

  const preferences: MenuItem[] = [
    {
      id: 1,
      label: 'Manage subscription',
      icon: 'crown.svg',
      route: '/profile/manage-subscription',
    },
    {
      id: 2,
      label: 'Logout',
      icon: 'logout.svg',
      textColor: 'text-[#C00F0C]',
      action: handleLogout,
    },
  ];

  const renderMenuItems = (items: MenuItem[]) => (
    <div className="border-[#00000017] border rounded-[10px]">
      {items.map(({ id, label, icon, route, textColor, action }) => (
        <div
          key={id}
          className="flex justify-between items-center p-[14px_15px_12px_16px] border-b-[#00000017] border-b cursor-pointer"
          onClick={() => (action ? action() : route && handleNavigation(route))}
        >
          <div className="flex items-center gap-2">
            <Image
              src={`${imageDomainUrl}/Profile/Icon/${icon}`}
              alt={label}
              height={18}
              width={18}
            />
            <p className={`text-sm font-medium ${textColor || 'text-black'}`}>{label}</p>
          </div>
          {route && (
            <Image
              src={`${imageDomainUrl}/Profile/Icon/arrow-right.svg`}
              alt="arrow"
              height={18}
              width={18}
            />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out font-['Urbanist']">
      <div className="mb-9 w-full max-w-[375px] px-5 pt-[24px]">
        <div className="flex flex-col items-center">
          <div className="relative flex justify-center items-center bg-[#C4C4C469] rounded-full w-fit mb-[14px]">
            <Image
              src={`${imageDomainUrl}/Profile/Icon/lisa-profile-photo.png`}
              alt="Profile"
              height={82}
              width={82}
              className="rounded-full"
            />
            <Image
              src={`${imageDomainUrl}/Profile/Icon/camera.svg`}
              alt="Camera"
              height={18}
              width={18}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 z-[1]"
            />
          </div>
          <h2 className="text-[22px] font-semibold leading-[26px] mb-[7px]">Dr Lisa Palmer</h2>
          <p className="text-[#545454] text-[14px] leading-[17px] mb-[14px]">info@renewme.com</p>
          <button
            onClick={() => router.push('/drlisapalmer')}
            className="flex gap-[10px] items-center border-black border rounded-[20px] px-[21px] h-[32px] text-[14px] leading-[17px]"
          >
            Profile
            <Image
              src={`${imageDomainUrl}/Profile/Icon/share.svg`}
              alt="Profile"
              height={14}
              width={14}
            />
          </button>
        </div>

        <div className="mt-[36px]">
          <p className="text-[#00000080] text-[14px] font-medium mb-[13px]">Page Information</p>
          {renderMenuItems(menuItems)}
        </div>

        <div className="mt-[29px]">
          <p className="text-[#00000080] text-[14px] font-medium mb-[13px]">Preferences</p>
          {renderMenuItems(preferences)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
