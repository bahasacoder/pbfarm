"use client"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import axios from "axios";

function ProductList() {
    // const [products, setProducts] = useState([]);
    /*
        effect
        const fetchProducts = async () => {
            axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data));
        }
        fetchProducts()
    */
    const {items:products, status} = useSelector((state)=>state.products)
    const dispatch = useDispatch();
       
    useEffect(()=>{
       
       if(status==='idle'){
        dispatch(fetchProducts);
       }
    },[status])
    
    return (
        <div>
            <h1>Product List Page</h1>
            {products.map(product => (
                <div key={product.id}>
                <img src={product.image} alt="image title" />
                <h2>{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title }</h2>
                <p>Price : ${product.price}</p>
                <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
                </div>
            ))}
           
        </div>
    )
}

export default ProductList

{/*
    // https://www.geeksforgeeks.org/reactjs/fetching-data-from-an-api-with-useeffect-and-usestate-hook/ 
        const [userList, setUserList] = useState([]);

        useEffect(() => {
            fetch('https://random-data-api.com/api/v2/users?size=5')
                .then(response => response.json())
                .then(data => setUserList(data));
        }, []);
*/}
