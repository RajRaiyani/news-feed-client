import React, { useState } from "react";
import PropTypes from "prop-types";

export const GlobalStorageContext = React.createContext();

export const GlobalStorageProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const value = {
        theme,toggleTheme,
    };

    return <GlobalStorageContext.Provider value={value}>{children}</GlobalStorageContext.Provider>;
};

GlobalStorageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

