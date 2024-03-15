import React, { useState, useEffect } from 'react';

const Filter = ({ products, onFilter }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products); 

    useEffect(() => {
        const storedSize = localStorage.getItem('selectedSize');
        if (storedSize) {
            setSelectedSize(storedSize);
            filterProducts(storedSize); 
        }
        // eslint-disable-next-line
    },[filteredProducts]);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        filterProducts(size);
        localStorage.setItem('selectedSize', size);
    };

    const handleClearFilter = () => {
        setSelectedSize('');
        setFilteredProducts(products); 
        localStorage.removeItem('selectedSize'); 
        onFilter(products);
    };

 
    const filterProducts = (size) => {
        const filtered = products.filter(product => product.size === size);
        setFilteredProducts(filtered);
        onFilter(filtered); 
    };

    return (
        <div className='card mt-4 mb-5'>
            <div className='card-header bg-secondary text-white p-3 fs-5'>
                <i className="bi bi-sort-down-alt pe-3"></i>
                Filter by attributes
            </div>
            <div className='card-body'>
                <h5>Size</h5>
                <div className='d-flex'>
                    <button className={`btn btn-outline-secondary m-2 ${selectedSize === 'XS' ? 'active' : ''}`} onClick={() => handleSizeSelect('XS')}>XS</button>
                    <button className={`btn btn-outline-secondary m-2 ${selectedSize === 'S' ? 'active' : ''}`} onClick={() => handleSizeSelect('S')}>S</button>
                    <button className={`btn btn-outline-secondary m-2 ${selectedSize === 'M' ? 'active' : ''}`} onClick={() => handleSizeSelect('M')}>M</button>
                    <button className={`btn btn-outline-secondary m-2 ${selectedSize === 'L' ? 'active' : ''}`} onClick={() => handleSizeSelect('L')}>L</button>
                    <button className={`btn btn-outline-secondary m-2 ${selectedSize === 'XL' ? 'active' : ''}`} onClick={() => handleSizeSelect('XL')}>XL</button>
                </div>
                {selectedSize && <button className="btn btn-outline-secondary" onClick={handleClearFilter}>Remove Filter</button>}
            </div>
        </div>
    );
};
  
export default Filter;
