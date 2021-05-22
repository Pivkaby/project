import { useEffect, useState } from 'react';
import '../../App.css';


function Header ({onChangeValueUser, inputValueSearch}) {

    const onSearchItems = (e) =>{
        const {value} = e.target;
        onChangeValueUser(value);
    }
    
    return (

            <header className="header">
                <input
                    className="search-field"
                    type="text"
                    value={inputValueSearch}
                    onChange={onSearchItems}
                />
          </header>
        
    );
}

export default Header;
