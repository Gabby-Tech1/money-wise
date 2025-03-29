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

// Rename to avoid conflicts
export type ToastContextProps = ToastProps;

interface ToastState {
  toasts: ToastContextProps[];
}

// Create context
const ToastContext = React.createContext<{
  toasts: ToastContextProps[];
  addToast: (toast: Omit<ToastContextProps, "id">) => void;
  removeToast: (id: string | number) => void;
  updateToast: (id: string | number, toast: Partial<ToastContextProps>) => void;
}>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  updateToast: () => {},
});

function useToast() {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export const toast = {
  toast: (props: Omit<ToastProps, "id">) => {
    const { addToast } = useToast();
    addToast(props);
  },
  dismiss: (id: string | number) => {
    const { removeToast } = useToast();
    removeToast(id);
  },
  success: (props: Omit<ToastProps, "id">) => {
    const { addToast } = useToast();
    addToast({
      ...props,
      // You'd add variant info here if needed
    });
  },
  error: (props: Omit<ToastProps, "id">) => {
    const { addToast } = useToast();
    addToast({
      ...props,
      // You'd add variant info here if needed
    });
  },
  warning: (props: Omit<ToastProps, "id">) => {
    const { addToast } = useToast();
    addToast({
      ...props,
      // You'd add variant info here if needed
    });
  },
};

// Create a version that doesn't rely on context for simpler imports
export const toastFunction = {
  toast: (props: Omit<ToastProps, "id">) => {
    // Implementation would be added later
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
  },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<ToastState>({
    toasts: [],
  });

  const addToast = React.useCallback(
    (toast: Omit<ToastProps, "id">) => {
      setState((prev) => {
        const id = Math.random().toString(36).substring(2, 9);
        return {
          toasts: [...prev.toasts, { ...toast, id }],
        };
      });
    },
    []
  );

  const removeToast = React.useCallback(
    (id: string | number) => {
      setState((prev) => ({
        toasts: prev.toasts.filter((toast) => toast.id !== id),
      }));
    },
    []
  );

  const updateToast = React.useCallback(
    (id: string | number, toast: Partial<ToastProps>) => {
      setState((prev) => ({
        toasts: prev.toasts.map((t) =>
          t.id === id ? { ...t, ...toast } : t
        ),
      }));
    },
    []
  );

  return (
    <ToastContext.Provider
      value={{
        toasts: state.toasts,
        addToast,
        removeToast,
        updateToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export { useToast };

// Context-based hook
export function useToastContext() {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error("useToastContext must be used within a ToastProviderWithContext");
  }

  return context;
}

// Context-based toast functions
export const toastWithContext = {
  toast: (props: Omit<ToastContextProps, "id">) => {
    // Implementation later when context is available
    console.log("Toast with context:", props);
  },
  dismiss: (id: string | number) => {
    console.log("Dismiss toast with context:", id);
  },
  success: (props: Omit<ToastContextProps, "id">) => {
    console.log("Success toast with context:", props);
  },
  error: (props: Omit<ToastContextProps, "id">) => {
    console.log("Error toast with context:", props);
  },
  warning: (props: Omit<ToastContextProps, "id">) => {
    console.log("Warning toast with context:", props);
  },
};

// The context provider component
export function ToastProviderWithContext({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<ToastState>({
    toasts: [],
  });

  const addToast = React.useCallback(
    (toast: Omit<ToastContextProps, "id">) => {
      setState((prev) => {
        const id = Math.random().toString(36).substring(2, 9);
        return {
          toasts: [...prev.toasts, { ...toast, id }],
        };
      });
    },
    []
  );

  const removeToast = React.useCallback(
    (id: string | number) => {
      setState((prev) => ({
        toasts: prev.toasts.filter((toast) => toast.id !== id),
      }));
    },
    []
  );

  const updateToast = React.useCallback(
    (id: string | number, toast: Partial<ToastContextProps>) => {
      setState((prev) => ({
        toasts: prev.toasts.map((t) =>
          t.id === id ? { ...t, ...toast } : t
        ),
      }));
    },
    []
  );

  return (
    <ToastContext.Provider
      value={{
        toasts: state.toasts,
        addToast,
        removeToast,
        updateToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
