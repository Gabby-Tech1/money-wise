import * as React from "react";

// Types for toast
export interface ToastProps {
  id: string | number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
}

// Create a standalone version that doesn't rely on context
export const toast = {
  toast: (props: Omit<ToastProps, "id">) => {
    console.log("Toast:", props);
  },
  dismiss: (id: string | number) => {
    console.log("Dismiss toast:", id);
  },
  success: (props: Omit<ToastProps, "id">) => {
    console.log("Success toast:", props);
  },
  error: (props: Omit<ToastProps, "id">) => {
    console.log("Error toast:", props);
  },
  warning: (props: Omit<ToastProps, "id">) => {
    console.log("Warning toast:", props);
  }
};

// Simple function that doesn't depend on React context
export function useToast() {
  return {
    toasts: [] as ToastProps[],
    addToast: (_toast: Omit<ToastProps, "id">) => {}, // Using underscore to mark as intentionally unused
    removeToast: (_id: string | number) => {}, // Using underscore to mark as intentionally unused
    updateToast: (_id: string | number, _toast: Partial<ToastProps>) => {} // Using underscore to mark as intentionally unused
  };
}

// Simple provider that just renders children
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return children;
};

// Export type for the toast2 function to avoid re-declaration
export type { ToastProps as ToastPropsType };
