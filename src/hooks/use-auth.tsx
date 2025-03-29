import { UserDetails } from "@/types/user";
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { toast } from "sonner";

export type AuthContextType = {
  user: UserDetails | null;
  logout: () => void;
  isLoadingUser: boolean;
  retry: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch(
        "https://cashflow-backend-yko9.onrender.com/api/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }

      const data = await response.json();
      setUser(data);
      console.log("User details:", data);
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Failed to load user details");
    } finally {
      setIsLoadingUser(false);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // development mode only - let's reset the userdetails with isconnected to true
  // correct immplementations simply recalls the fetchUserDetails function
  const retry = async () => {
    setIsLoadingUser(true);
    // fake 1s delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (user) {
      setUser({ ...user, isconnected: true });
    }
    setIsLoadingUser(false);
  };

  const value = { user, logout, isLoadingUser, retry };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
