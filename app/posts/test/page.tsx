import React from 'react';
import 'tailwindcss/tailwind.css';
const styles = {
    container: 'max-w-4xl mx-auto py-8 px-4',
    title: 'text-4xl font-bold mb-4',
    description: 'text-lg mb-6',
    content: 'bg-white p-6 rounded-lg shadow-md',
    list: 'list-disc list-inside mt-4'
};

const TestPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Test Page</h1>
            <p className={styles.description}>This is a dummy page for testing purposes.</p>
            <div className={styles.content}>
                <h2>Additional Content</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec orci varius, at tincidunt justo facilisis.</p>
                <ul className={styles.list}>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </div>
        </div>
    );
};

export default TestPage;

