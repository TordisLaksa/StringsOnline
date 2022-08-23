
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import appService from "../../AppService/AppService";

export const ProductList = () => {
    const [ products, setProducts ] = useState();
    
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
        { products && products.map((item, i) => {
            // console.log(item.subgroups[0].products);
        
            return(
                
                <figure key={item.id}>
                    <img src={item.subgroups[0].products[0].image_fullpath} alt={item.name} />
                <figcaption>
                    <article>
                        <h3>{item.subgroups[0].products[0].name}</h3>
                        <p>{item.subgroups[0].products[0].description_long}</p>
                    </article>
                </figcaption>
            </figure>
                )
            
        })}
        <Outlet />
        </>
    )
}