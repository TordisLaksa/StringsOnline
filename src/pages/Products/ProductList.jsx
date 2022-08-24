import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import appService from "../../AppService/AppService";
import './ProductList.scss'

export const ProductList = () => {
    const [ products, setProducts ] = useState();
    const { id, subid } = useParams();
     
    useEffect(() => {
    
        const getProducts = async () => {
        try{
            const response = await appService.getAll('');
    
            if (response.data.productgroups) {
                setProducts(response.data.productgroups.items);
            }
        }catch(error) {
            console.log(error);
        }
    }
    getProducts();
}, [])
    return(
        <>
        {products && products.map((item) => {
         return(
             <React.Fragment key={item.id}>
            {item.subgroups && item.subgroups.map((group) => {
                if (group.parent_id == id) {
                    if (group.id == subid || !subid) {
                    return(
                    <figure key={group.id}>
                        {group.products && group.products.map((products) => {
                            return(
                                <React.Fragment key={products.id}>
                                    <img src={products.image_fullpath} alt={products.name} />
                                    <figcaption>
                                        <article>
                                            <h3>{products.name}</h3>
                                            <p>{products.description_long}</p>
                                            <button>Read more</button>
                                        </article>
                                        <article>
                                            <p>Pris: DKK {products.price}</p>
                                            <button>Læg i kurv</button>
                                            <p>Der er <strong>{products.stock}</strong> på lager</p>
                                        </article>
                                    </figcaption>
                                </React.Fragment>
                            )
                        })}
                    </figure>
                    )
                    }
                }
            })}
        </React.Fragment>
        ) 
       
        })}
        <Outlet />
        </>
    )
}
