import { useEffect, useState } from 'react';
import '../../App.css';


function MainContent ({ goods }) {

    return (
        <main className="main-wrapper">
            {
                goods.map((item) => (
                    <div className="item-block">
                        <p className="item-name">{item.name}</p>
                        <p className="item-name">{item.price}</p>
                        <p className="item-name">{item.brand}</p>
                    </div>
                ))
            }
        </main>
    );
}

export default MainContent;
