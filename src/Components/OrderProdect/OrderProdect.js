import React  from 'react';

import './OrderProduct.css'
const OrderProdect = (props) => {
    const { name, price} = props.order;
   
    return (
        <div>

            <table class="table w-75 m-auto">

                <tbody>
                    <tr>

                        <td className="product-name">{name}</td>
                        <td className="price">{price?.Price}</td>
                        <td>date</td>
                    </tr>
                    <tr></tr>


                </tbody>
            </table>
        </div>
    );
};

export default OrderProdect;