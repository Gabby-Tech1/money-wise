import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear all items from localStorage
    localStorage.clear();
    
    // Show success message
    toast.success("Logged out successfully");
    
    // Redirect to login page
    navigate("/login");
  }, [navigate]);

  return null;
};

export default Logout;
