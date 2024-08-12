import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Category.css';

const Category = () => {
    return (
        <div className="category-container">
            <h2>SHOP BY CATEGORY</h2>
            <div className="categories">
                <div className="category-wom">
                    <Link to="/women">
                        <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/most-loved-tiles_03_3_5frTzJ4.jpg?format=webp&w=480&dpr=1.3" alt="Women" />
                        
                    </Link>
                </div>
                <div className="category-men">
                    <Link to="/men">
                        <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Bestselling-tiles-4_01_1.jpg?format=webp&w=480&dpr=1.3" alt="Men" />
                        
                    </Link>
                </div>
                <div className="category-kid">
                    <Link to="/kids">
                        <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/product-images/Shop-by-price-kids_01.jpg?format=webp&w=480&dpr=1.3" alt="Kids" />
                        
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;
