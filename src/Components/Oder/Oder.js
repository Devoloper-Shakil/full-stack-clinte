import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { userContext } from '../../App';
import OrderProdect from '../OrderProdect/OrderProdect';


const Oder = () => {
    const [loginUser, setLoginUser] = useContext(userContext);
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://apricot-cupcake-84662.herokuapp.com/ordes?email=' + loginUser.email,{
            
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);

    return (
        <div>
            <h1>YOUR ORDERS</h1>

            <h3>Name:{loginUser.name}</h3>
           
            <table class="table w-75 m-auto">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
            </table>

            {
                order.map(order => <OrderProdect order={order}></OrderProdect>)
            }

        </div>
    );
};

export default Oder;