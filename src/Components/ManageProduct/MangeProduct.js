import React, { useEffect, useState } from 'react';
import './ManageProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const MangeProduct = (props) => {
    const { name, price, _id } = props.pd;
    const deleteItem = id => {


        // console.log(id)
        fetch(`https://apricot-cupcake-84662.herokuapp.com/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {

              console.log("product deletet")
            })
    }


    return (
        <div>
            <table class="table table-bordered">
                <tr>
                    <td className="product-name">{name}</td>
                    <td className="text-center price">{price?.Price}</td>
                    <td>
                        <button><FontAwesomeIcon title="Edit" className="me-4 control" icon={faEdit} /></button>
                        <button onClick={() => deleteItem( _id )} ><FontAwesomeIcon title="Delete " className="ms-2 control " icon={faTrash} /></button>
                       
                    </td>
                </tr>
            </table>
        </div >
    );
};

export default MangeProduct;