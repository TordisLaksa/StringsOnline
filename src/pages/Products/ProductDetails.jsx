import React, { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import appService from "../../AppService/AppService";

export const ProductDetails = () => {
    const [ productDetails, setProductDetails ] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        const getProductDetails = async () => {
            try{
                const response = await appService.getDetails('products', id)
                if (response.data) {
                    setProductDetails(response.data.item);
                    console.log(response.data.item);
                }
            }catch(error) {
                console.log(error);
            }
        }
        
        getProductDetails();
    }, [])
    return(
        <>
        <figure>
            {productDetails && productDetails.gallery.map((image, i) => {
                return(
                    <React.Fragment key={i}>
                        <img src={image.fullpath} alt={productDetails && productDetails.name} />
                    </React.Fragment>
                )
            })}
            <figcaption>
                <article>
                    <h2>{productDetails && productDetails.name}</h2>
                        <p>{productDetails && productDetails.description_long}</p>
                </article>
            </figcaption>
        </figure>
        </> 
    )
}