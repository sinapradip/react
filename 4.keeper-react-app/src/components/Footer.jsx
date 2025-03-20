import React from 'react';

const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer>
            <p>© {currentYear} Keeper. All Rights Reserved.</p>
        </footer>
    );
}