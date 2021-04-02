import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';

const Product = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const url = `https://apricot-cupcake-84662.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div>

            <form className="d-flex w-25 m-auto mt-5">
                <input class="form-control me-2" placeholder="Search" type="search" aria-label="Search" name="" id="" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            {
                products.map(pd => <Home pd={pd}></Home>)
            }

        </div>
    );
};

export default Product;