import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthData {
    user: {
        first_name: string;
        last_name: string;
        email: string;
        department_code: string;
        role: string;
        is_admin: boolean;
    };
    apcis_token: string;
    pahiram_token: string;
}

interface AppContextType {
    view: string;
    setView: (view: string) => void;
    authData: AuthData | null;
    setAuthData: (data: AuthData) => void;
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [view, setView] = useState<string>('Borrow');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [authData, setAuthData] = useState<AuthData | null>(null);


    return (
        <AppContext.Provider value={{ view, setView, authData, setAuthData, isAuthenticated, setIsAuthenticated }}>
    {children}
    </AppContext.Provider>
);
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};