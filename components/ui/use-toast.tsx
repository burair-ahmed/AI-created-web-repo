// components/ui/use-toast.tsx
import { createContext, useContext, ReactNode } from "react";
import { useState } from "react";

interface ToastContextType {
  toast: (options: { title: string; description: string }) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<{ title: string; description: string }[]>([]);

  const toast = ({ title, description }: { title: string; description: string }) => {
    setToasts((prevToasts) => [...prevToasts, { title, description }]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1));
    }, 3000); // Display each toast for 3 seconds
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2">
        {toasts.map((t, i) => (
          <div key={i} className="p-4 bg-gray-800 text-white rounded shadow-md">
            <strong>{t.title}</strong>
            <p>{t.description}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  return context;
}
