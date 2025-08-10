import create from 'zustand';

interface ProfileState {
  profile: any | null;
  setProfile: (profile: any) => void;
}

const useProfileStore = create<ProfileState>(set => ({
  profile: null,
  setProfile: profile => set({ profile }),
}));

export default useProfileStore;
