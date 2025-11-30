import React, { createContext, useContext, useState, useEffect } from 'react';

interface Signature {
  id: string;
  name: string;
  email: string;
  city: string;
  date: string;
}

interface AppContextType {
  signatures: Signature[];
  addSignature: (signature: Omit<Signature, 'id' | 'date'>) => void;
  getSignatureCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [signatures, setSignatures] = useState<Signature[]>(() => {
    const saved = localStorage.getItem('yellowrack_signatures');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('yellowrack_signatures', JSON.stringify(signatures));
  }, [signatures]);

  const addSignature = (signature: Omit<Signature, 'id' | 'date'>) => {
    const newSignature: Signature = {
      ...signature,
      id: `sig_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      date: new Date().toISOString(),
    };
    setSignatures((prev) => [newSignature, ...prev]);
  };

  const getSignatureCount = () => signatures.length;

  return (
    <AppContext.Provider value={{ signatures, addSignature, getSignatureCount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
