import { HiMoon } from "@react-icons/all-files/hi/HiMoon";
import { HiSun } from "@react-icons/all-files/hi/HiSun";
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setDarkMode(isDarkMode);

        if (localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        setDarkMode(!darkMode);
    };

    return (
        <button
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleDarkMode}
            className="flex items-center justify-center transition-colors duration-200"
        >
            {darkMode ? (
                <HiSun className="antialiased" size={"20px"} />
            ) : (
                <HiMoon className="antialiased" size={"20px"} />
            )}
        </button>
    );
};

export default DarkModeToggle;