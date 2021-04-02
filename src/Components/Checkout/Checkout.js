import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const Checkout = (props) => {
    const { name } = useParams()
    const [check, setCheck] = useState({})
    const [loginUser, setLoginUser] = useContext(userContext);

    useEffect(() => {
        fetch('https://apricot-cupcake-84662.herokuapp.com/products/' + name)
            .then(res => res.json())
            .then(data => setCheck(data[0]))
    }, [name]);

    const hendeCheckout = () => {

        const newOrder ={...check, newDate: new Date()}
       
        fetch('https://apricot-cupcake-84662.herokuapp.com/orders', {
            method: "POST",

            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(result => {
                alert('Oreder Submet')
            })
    }

    return (
        <div className="container">
            <h4>Checkout</h4>

          
            <table class="table" >
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{check?.name}</td>
                        <td>1</td>
                        <td> $ {check?.price?.Price}</td>
                    </tr>
                    <tr>
                        <td>Trotal</td>
                        <td></td>
                        <td>$ {check?.price?.Price}</td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" class="btn btn-primary float-end ms-5" onClick={hendeCheckout} value="Checkout" />
        </div>
    );
};

export default Checkout;