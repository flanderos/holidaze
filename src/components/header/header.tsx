import React from "react";

type HeaderProps = {
    title: string;
    subtitle?: string;
};

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
        <header>
            <div>
            <h1>Holidaze</h1>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Venues</li>
                    <li>Bookings</li>
                    <li>Log in</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;