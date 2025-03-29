// Re-export from our main hook for compatibility
import { toast, useToast } from '../../hooks/use-toast';

export { toast, useToast };

// Additional standalone toast function for UI components
export const toast2 = {
  toast: (props: any) => {
    console.log("UI Toast:", props);
  },
  dismiss: (id: string | number) => {
    console.log("UI Dismiss toast:", id);
  },
  success: (props: any) => {
    console.log("UI Success toast:", props);
  },
  error: (props: any) => {
    console.log("UI Error toast:", props);
  },
  warning: (props: any) => {
    console.log("UI Warning toast:", props);
  }
};
