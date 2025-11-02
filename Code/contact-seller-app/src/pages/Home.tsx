import React from 'react';
import ContactButton from '../components/ContactButton/ContactButton';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to the Contact Seller App</h1>
            <ContactButton />
        </div>
    );
};

export default Home;