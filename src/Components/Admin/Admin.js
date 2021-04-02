import React, {
    Component
} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct.js'
import Manage from '../Manage/Manage.js'
import Edite from '../Edite/Edite.js'
import './Admin.css';



const Admin = () => {
    return (
        <div className="container">
            <Router>
                <div>
                    <h1>ADD PRODUCT</h1>
                    <ul className="header">
                        <li>
                            <Link to="/">AddProduct</Link>
                        </li>
                        <li>
                            <Link to="/Manage">Manage Product</Link>
                        </li>
                        <li>
                            <Link to="/Edite">Edit Product</Link>
                        </li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={AddProduct} />
                        <Route path="/Manage" component={Manage} />
                        <Route path="/Edite" component={Edite} />
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Admin;

