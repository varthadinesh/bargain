import React from 'react';

const Filter = () => {
    return (
        <>

            <div className='card mt-4 mb-5'>
                <div className='card-hearder bg-secondary text-white p-3 fs-5'>
                <i className="bi bi-sort-down-alt pe-3"></i>
                Filter by attributes
                </div>
                <div className='card-body'>
                    <h5>Size</h5>
                    <div className='d-flex'>
                    <button className='btn btn-outline-secondary m-2'>0-2 Yrs</button>
                    <button className='btn btn-outline-secondary m-2'>0-5 Yrs</button>
                    <button className='btn btn-outline-secondary m-2'>2-4 Yrs</button>
                    <button className='btn btn-outline-secondary m-2'>4-6 Yrs</button>
                    <button className='btn btn-outline-secondary m-2'>5-10 Yrs</button>
                    <button className='btn btn-outline-secondary m-2'>6-8 Yrs</button>
                    <button className='btn btn-outline-secondary m-2'>8-10 Yrs</button>
                    <button className='btn btn-outline-secondary m-2'>10-15 Yrs</button>
        
                    </div>
                </div>

            </div>
        </>
    );
};

export default Filter;