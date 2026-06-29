"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ToastData {
  title: string;
  description: string;
}

interface ToastContextType {
  showToast: (toast: ToastData) => void;
  toast: ToastData | null;
}

const ToastContext = createContext<ToastContextType | null>(
  null
);

export function ToastProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [toast, setToast] = useState<ToastData | null>(null);

  function showToast(data: ToastData) {
    setToast(data);

    setTimeout(() => {
      setToast(null);
    }, 2500);
  }

  return (
    <ToastContext.Provider
      value={{
        showToast,
        toast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider"
    );
  }

  return context;
}