import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // 🔐 Important
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("emailai-user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (err) {
                localStorage.removeItem("emailai-user");
                setUser(null);
            }
        }
        setLoading(false); // ✅ Finished loading
    }, []);

    const login = (userData) => {
        localStorage.setItem("emailai-user", JSON.stringify(userData));
        setUser(userData);
        navigate("/dashboard");
    };

    const logout = () => {
        localStorage.removeItem("emailai-user");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated: !!user,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
