import React from 'react';

const Hero = ({ handleLogout }) => {
    return (
        <div>
            <section className="hero">
                <nav>
                    <h2>Application</h2>
                    <button onClick={handleLogout} >Logout</button>
                </nav>
            </section>
        </div>
    );
}

export default Hero;
