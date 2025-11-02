import React from 'react';
import styles from './ContactButton.module.css';
import { useAnimation } from '../../hooks/useAnimation';
import { openExternal } from '../../utils/openExternal';

const ContactButton: React.FC = () => {
    const { isAnimating, startAnimation } = useAnimation();

    const handleClick = () => {
        startAnimation();
        openExternal('https://www.facebook.com');
    };

    return (
        <button 
            className={`${styles.contactButton} ${isAnimating ? styles.animating : ''}`} 
            onClick={handleClick}
        >
            Contact Seller
        </button>
    );
};

export default ContactButton;