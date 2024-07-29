import { useState } from 'react';
import vans  from '../assets/cardInfo'
import Card from '../components/Card';
import './van-list.css'
const Vans = () => {
const handleClick = (e) => {
    console.log(e.target)
}
    return (
        <div className=".vans-list">
        {vans.map(van => (
                // <Card
                //     key={van.id}
                //     id={van.id}
                //     image={van.image}
                //     title={van.title}
                //     type={van.type}
                //     price={van.price}
                //     description={van.description}
                // />

                <div className="van" key={van.id}>
                    <div className="imgContainer"><img src={van.image} alt="" /></div>
                    <div className="card-info">
                    <h2 className="title">{van.title}</h2>
                    <p className="price">${van.price}/day</p>
                    <button className="type" onClick={handleClick}>{van.type}</button>
                    </div>
                </div>
            )
        )}           
        </div> 
    );
}
 
export default Vans;