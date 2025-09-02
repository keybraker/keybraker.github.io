import React from 'react';

interface MyWordsProps {
    text?: string;
    className?: string;
}

export const MyWords: React.FC<MyWordsProps> = ({
    text = 'My work, in my own words',
    className = '',
}) => {
    return (
        <div
            className={`text-center text-2xl md:text-3xl font-serif italic font-extralight tracking-wide text-tsiakkas-dark dark:text-tsiakkas-light ${className}`}
        >
            {text}
        </div>
    );
};

export default MyWords;