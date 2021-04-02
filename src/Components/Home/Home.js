
import { Link } from 'react-router-dom';
import React from 'react';





const Home = (props) => {

    // const {name}=props.product ;
    const { name, imageUrl,price} = props.pd || {};
    return (
        <div className="container">
            <div className="card ms-5 mt-5 " style={{ "width": "20rem", "float": "left", "height": "400px" }}>
                <img src={imageUrl} className="card-img-top mt-2 w-75 m-auto" alt="" />

                <div className="card-body m-auto">
                    <h2 class="card-title">{name}</h2>
                    <div className="mt-4">
                        <h3 className="float-start me-4">$ {price.Price}</h3>
                        <Link to={"/name/"+name} class="btn btn-primary float-end ms-5">BUY NOW</Link>
                      
                    </div>
                </div>
            </div>

        </div>









    )
};

export default Home;