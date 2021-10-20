import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';

//our gallery component
const Galleries = () => {
    const [galleries, setGalleries] = useState([]);
    useEffect(()=>{
        fetch('./gallery.json')
        .then(res=>res.json())
        .then(data=>setGalleries(data))
    },[]);
    return (
        <div className="mb-5">
        <h2 className="text-center pb-3">Our Gallery</h2>
        <div className="container">
            <div className="row g-2">
                {
                    galleries.map(gallery=><Gallery 
                        key={gallery.id}
                        gallery={gallery}
                        ></Gallery>)
                }
            </div>
        </div>
        </div>
    );
};

export default Galleries;