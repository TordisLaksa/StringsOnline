import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import appService from "../../AppService/AppService";
import './ProductList.scss'

export const ProductList = () => {
    const [ products, setProducts ] = useState();
    const { id, subid } = useParams();
     
    useEffect(() => {
    
        //henter en liste med alt fra APIet
        const getProducts = async () => {
            //error handling
        try{
            const response = await appService.getAll('');
            //hvis der er data + productgroups
            if (response.data.productgroups) {
                //så bliver setProducts til productgroups items
                setProducts(response.data.productgroups.items);
            }
        }catch(error) {
            console.log(error);
        }
    }
    //kalder funktionen
    getProducts();
    //tomt dependency array
}, [])


    return(
        <>
        {/* mapper products */}
        {products && products.map(item => {
         return(
             <React.Fragment key={item.id}>
            {/* mapper igennem subgroups for at få grupper med group og i som parametre */}
            {item.subgroups && item.subgroups.map((group, i) => {
               //tjekker om parent_id matcher med id 
                if (group.parent_id === id) {
                    //tjekker om group id er identisk med subid eller om subid eksisterer
                    if (group.id === subid || !subid) {
                       
                    return(
                    <React.Fragment key={i}>
                        {/* her mapper jeg over group.products for at på produkterne ud */}
                        {group.products && group.products.map((products) => {
                            return(
                                <figure key={products.id}>
                                    {/* giver img id for at kunne rette backenderens fejl ift visning af billeder */}
                                    <img id={`I${products.item_number}`} src={products.image_fullpath} alt={products.name} />
                                    <figcaption>
                                        <article>
                                            <h3>{products.name}</h3>
                                            <p>{products.description_long}</p>
                                            {/* linker til produktets id som vises på productDetails siden */}
                                            <button><Link to={`${subid}/${products.id}`}>Read more</Link></button>
                                        </article>
                                        <article>
                                            <p>Pris: DKK {products.price}</p>
                                            <button>Læg i kurv</button>
                                            <p>Der er <strong>{products.stock}</strong> på lager</p>
                                        </article>
                                    </figcaption>
                                </figure>
                            )
                        })}
                    </React.Fragment>
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