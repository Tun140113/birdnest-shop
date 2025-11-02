import { useState, useEffect } from 'react';

const useAnimation = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000); // Duration of the animation
    };

    return { isAnimating, startAnimation };
};

export default useAnimation;