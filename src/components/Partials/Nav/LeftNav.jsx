import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appService from "../../../AppService/AppService";
import './LeftNav.scss'


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
        
        const getProductGroups = async () => {
            try {
                const response = await appService.getAll('productgroups');
                // console.log(response.data.items);
                if (response.data) {
                    setProductGroups(response.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getProductGroups();
    }, [])
    

    
    return(
        <nav id="LeftNav">
            <ul>
            {productGroups && productGroups.map((item, i) => {
                // console.log(item.subgroups[i]);
                return(
                    <React.Fragment key={item.id}>
                        <ProductGroupID id={item.subgroups[i].parent_id}/>
                        <li className="accordion" onClick={handleClick}><Link to={`productlist/${item.subgroups[i].parent_id}`}>{item.title}</Link></li>
                        <li className="panel">
                            <Link to={'/'}>{item.subgroups[i].title}</Link>
                        </li>
                    </React.Fragment>
                )
            })}
            </ul>
        </nav>
    )
}



export const ProductGroupID = ({ id }) => {
    const [productSubGroups, setProductSubGroups] = useState();
    useEffect(() => {

        const getProductSubGroups = async () => {

            try {
                const response = await appService.getDetails('productgroups', id);
                // console.log(response);
                if (response.data) {
                    setProductSubGroups(response.data.items);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getProductSubGroups();
    }, [id])
}
