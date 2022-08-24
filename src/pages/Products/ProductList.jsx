import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import appService from "../../AppService/AppService";
import './ProductList.scss'

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
        {products && products.map((item) => {
         return(
             <React.Fragment key={item.id}>
            {item.subgroups && item.subgroups.map((group) => {
                // console.log(group);
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
            })}
             </React.Fragment>
        ) 
       
    })}
        <Outlet />
        </>
    )
}

/* // return(
            //     <figure key={item.id}>
            //         <img src={item.subgroups[0].products[0].image_fullpath} alt={item.name} />
            //     <figcaption>
            //         <article>
            //             <h3>{item.subgroups[0].products[0].name}</h3>
            //             <p>{item.subgroups[0].products[0].description_long}</p>
            //             <p className="greenTxt">READ MORE</p>
            //         </article>
            //         <article>
            //             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aspernatur deleniti necessitatibus, esse quibusdam mollitia quos laudantium, ea reiciendis pariatur aut ut nam repellat animi neque consectetur ducimus? Ipsam, illo!</p>
            //             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure neque laudantium, qui harum error quo deserunt dolore alias incidunt ipsa commodi sint dolorem ullam porro doloremque voluptate, cupiditate nemo est.</p>
            //         </article>
            //     </figcaption>
            // </figure>
            // ) */