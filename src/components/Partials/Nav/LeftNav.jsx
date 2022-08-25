import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appService from "../../../AppService/AppService";
import './LeftNav.scss'

/*jeg laver en function med et event, der toggler class efter currentTaget
det er en onClick (se linje 52)
Functionen ser så på nextElementSibling (i mit tilfælde en ol) og skifter 
fra display none til block eller omvendt*/
const handleClick = event => {
    event.currentTarget.classList.toggle('active');
    
    let panel = event.currentTarget.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

export const LeftNav = () => {
    const [productGroups, setProductGroups] = useState();
   
    useEffect(() => {
        
        //henter productgroups
        const getProductGroups = async () => {
            //error handling
            try {
                const response = await appService.getAll('productgroups');
                //hvis data SÅ setProductGroups......
                if (response.data) {
                    setProductGroups(response.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getProductGroups();
        //tomt dependency array
    }, [])

    
    return(
        <nav id="LeftNav">
            <ul>
            {/* map */}
            {productGroups && productGroups.map((item, i) => {
                return(
                    <React.Fragment key={item.id}>
                        {/* laver classname til accordion og sætter mit onclick med min function i */}
                        <li className="accordion" onClick={handleClick}><Link to={`/productlist/${item.subgroups[i].parent_id}`}>{item.title}</Link></li>
                        {/* ol udnfor map for at få alle li'erne til at ligge i et parent element,
                        da jeg har brug for at .panel er sibling til .accordion */}
                        <ol className="panel">
                        {item && item.subgroups.map((item) => {
                            return(
                                <React.Fragment key={item.id}>
                                {/* laver submenu punkterne og laver stien de skal linke til via en template string */}
                                <li><Link to={`productlist/${item.parent_id}/${item.id}`}>{item.title}</Link></li>
                                </React.Fragment>
                            )
                        })}
                        </ol>
                    </React.Fragment>
                )
            })}
            </ul>
        </nav>
    )
}