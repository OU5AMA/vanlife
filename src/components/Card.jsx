import './card.css'


const Card = ({id, image, title, type, price, description}) => {
    return ( 
        <div className="card" key={id}>
            <img src={image} alt="title" className="card-img"/>
            <div className="card-content">
                <h3>{title}</h3>
                <p className="type">{type}</p>
                <p className="price">{price}$</p>
                <p className="description">{description}</p>
                <button className="rent-button">Rent this van</button>
            </div>

            
        </div> 
    );
}
 
export default Card;