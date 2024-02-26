import { useEffect, useState } from 'react';
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > document.documentElement.clientHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="ScrollToTopButton"
            aria-label="Scroll to Top"
            onClick={scrollToTop}
            className={`scrollToTopButton
            fixed bottom-8 right-4 p-3 rounded-full
            text-tsiakkas-dark dark:text-tsiakkas-light bg-tsiakkas-light dark:bg-tsiakkas-dark
            border-tsiakkas-dark dark:border-tsiakkas-light border z-50
            ${isVisible ? 'visible' : ''}`}
        >
            <FaArrowUp className="antialiased" size={"20px"} />
        </button>
    );
};

export default ScrollToTopButton;
