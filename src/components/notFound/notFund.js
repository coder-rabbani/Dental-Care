import React from 'react';
import notFound from '../../images/705.jpg'

const notFund = () => {
    return (
        <div className="text-center mb-5">
            <img width="800" className="img-fluid notfound" src={notFound} alt="" />
            <h2>Oooooppps!!! We are sorry, page not found. </h2>
        </div>
    );
};

export default notFund;