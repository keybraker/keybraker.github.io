import { useEffect, useState } from 'react';
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

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

    useEffect(() => {
        const checkPhotoModal = () => {
            const photoDialog = document.querySelector('[role="dialog"]');
            setIsPhotoModalOpen(!!photoDialog);
        };

        checkPhotoModal();
        window.addEventListener('scroll', checkPhotoModal);
        
        const observer = new MutationObserver(checkPhotoModal);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('scroll', checkPhotoModal);
            observer.disconnect();
        };
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
            text-tsiakkas-dark dark:text-tsiakkas-light
            bg-tsiakkas-light dark:bg-tsiakkas-dark
            border-tsiakkas-dark dark:border-tsiakkas-light border z-50
            ${isVisible && !isPhotoModalOpen ? 'visible' : ''}`}
        >
            <FaArrowUp className="antialiased" size={"20px"} />
        </button>
    );
};

export default ScrollToTopButton;
