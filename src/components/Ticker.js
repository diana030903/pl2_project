import React from "react";

function Ticker() {
    return (
        <div style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            background: '#1ABC9C',
            color: '#FFFFFF',
            padding: '10px',
        }}>
            <marquee>Развлекайся в Бишкеке: концерты, театры, выставки - всё в одном месте!</marquee>
        </div>
    );
}

export default Ticker;