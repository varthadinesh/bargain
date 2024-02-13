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
                    <button className='btn btn-outline-secondary m-2'>XS</button>
                    <button className='btn btn-outline-secondary m-2'>M</button>
                    <button className='btn btn-outline-secondary m-2'>L</button>
                    <button className='btn btn-outline-secondary m-2'>XL</button>
                    {/* <p className='ps-5'><i class="bi bi-caret-right-fill"></i>XS</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>M</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>L</p>
                    <p className='ps-5'><i class="bi bi-caret-right-fill"></i>XL</p> */}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Filter;