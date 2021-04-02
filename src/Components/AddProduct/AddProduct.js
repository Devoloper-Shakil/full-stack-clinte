import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const [newCount, setNewCount] = useState(false);
    const [prices, setPrices] = useState({

        Wight: '',
        price: ''

    })

    const hendeqontetety = (e) => {
        const newCount = { ...prices }
        newCount[e.target.name] = e.target.value
        setPrices(newCount);

    }

    const onSubmit = data => {
        const evaentData = {
            name: data.name,
            imageUrl: imageUrl,
            price: prices

        }

        fetch('https://apricot-cupcake-84662.herokuapp.com/product', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(evaentData)
        })
            .then(res => {
                alert('Product Add')
            }

            )

        // console.log(data.name)
    };
    const hendelImg = event => {

        const imageData = new FormData()
        imageData.set('key', 'dfe31119f12337cdbc965c502ae6251c')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(watch("example")); // 
    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="d-flex m-auto w-25 text-start">
                    <div>
                        <label>Product Name</label>
                        <br />
                        <input name="name" defaultValue="Product Name" ref={register} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="ms-5">
                        <label>Wight</label>
                        <br />
                        <input name="Wight" type="number" onBlur={hendeqontetety} placeholder="wight" ref={register} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                </div>
                <div className="d-flex m-auto w-25 text-start">

                    <div >
                        <label>Add Price</label>
                        <br />
                        <input name="Price" type="number" onBlur={hendeqontetety} placeholder="price" ref={register} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>
                    <div className="ms-5 mt-3">
                        <input type="file" name="photo" onChange={hendelImg} />
                    </div>
                </div>
                <br />
                <input type="submit" onClick={() => setNewCount(true)} value="Save" />
            </form>

        </>
    );
};

export default AddProduct;