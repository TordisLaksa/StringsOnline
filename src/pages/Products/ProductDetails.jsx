import React, { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import appService from "../../AppService/AppService";
import './ProductDetails.scss';


export const ProductDetails = () => {
    const [ productDetails, setProductDetails ] = useState();
    const { id } = useParams();
    
    useEffect(() => {
        //henter product detaljer
        const getProductDetails = async () => {
            //error handling
            try{
                //kalder getDetails fra appService med 'products' & id som argumenter
                const response = await appService.getDetails('products', id)
                if (response.data) {
                    setProductDetails(response.data.item);

                }
            }catch(error) {
                console.log(error);
            }
        }
        //kalder function
        getProductDetails();
        //tomt dependency array
    }, [])
    
//gvis der ikke er noget i gallery
    if(productDetails && productDetails.gallery.length == 0){
        return(
            <figure>
                <img src={productDetails.image.fullpath} alt={productDetails.name}/>
                <figcaption>
                    <article>
                        <h3>{productDetails.name}</h3>
                        <p>{productDetails.description_long}</p>
                    </article>
                    <article>
                        <img src={productDetails.brand_image} alt={productDetails.brand} />
                    </article>
                </figcaption>
            </figure>
        )
    }
    //hvis der er inhold i gallery
    else{
        return(
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
        )
    }
}