import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js';
import { useState } from 'react';

function POPOSList() {
    const [query, setQuery] = useState('');
    const spaces = data.filter((obj) => {
        const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
        const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
        return inTitle || inAddress
    }).map ((obj) => {
        const { id, title, address, images, hours, features } = obj
        return (
            <POPOSSpace
                id={id}
                key={`${title}-${id}`}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
                features={features}
            />
        )
    });

    return (
        <div className="POPOSList">
            <form> 
                <input
                    value={query}
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>
            {spaces}
        </div>
    );
}

export default POPOSList;