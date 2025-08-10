export interface User {
  id: string;
  email: string;
  name?: string;
  subscriptionStatus: string;
  // Add other user properties as needed
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}
