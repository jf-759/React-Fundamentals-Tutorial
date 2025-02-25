import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json';


function POPOSList() {

    const spaces = data.map(({ title, address, images, hours }) => {

        return (
            <POPOSSpace
                key={title}
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    })

    return (
        <div className='POPOSList'>
            { spaces }
        </div>
        // <div className='POPOSList'>
        //     <POPOSSpace
        //         name='50 California Street'
        //         address='50 California St.'
        //         image='50-california-st.jpg'
        //     />
        //     <POPOSSpace
        //         name='100 Pine Street'
        //         address='100 Pine St'
        //         image='100-pine.jpg' 
        //     />
        //     <POPOSSpace
        //         name='101 California'
        //         address='101 California'
        //         image='101-california.jpg' 
        //     />
        //     <POPOSSpace
        //         name='343 Sansome Roof Garden'
        //         address='343 Sansome St.'
        //         image='343-sansome-roof-garden.jpg' 
        //     />
        //     <POPOSSpace
        //         name='525 Market Street Plaza'
        //         address='525 Market St.'
        //         image='525-market-street-plaza.jpg' 
        //     />
        //     <POPOSSpace
        //         name='555 California'
        //         address='555 California'
        //         image='555-california.jpg' 
        //     />
        //     <POPOSSpace
        //         name='Citigroup Center'
        //         address='1 Sansome St.'
        //         image='citigroup-center.jpg' 
        //     />
        //     <POPOSSpace
        //         name='Embarcadero Center'
        //         address='456 Embarcadero Center'
        //         image='embarcadero-center.jpg' 
        //     />
        //     <POPOSSpace
        //         name='Empire Park'
        //         address='123 Empire Park'
        //         image='empire-park.jpg' 
        //     />
    )
}

export default POPOSList