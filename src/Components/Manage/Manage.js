import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import MangeProduct from '../ManageProduct/MangeProduct';


const Manage = () => {

    const [manage, setManage] = useState([]);

    useEffect(() => {
        const url = `https://apricot-cupcake-84662.herokuapp.com/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setManage(data))
    }, [])

    return (
        <div>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>

                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </Table>

            {
                manage.map(pd => <MangeProduct pd={pd}></MangeProduct>)
            }

        </div>
    );
};

export default Manage;