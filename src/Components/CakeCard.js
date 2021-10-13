function CakeCard({cakeObj: {flavor, size='6" cake', price}}) {
   
    return (
        <div>
            <h1>Flavor: {flavor}</h1>
            <h1>Size: {size}</h1>
            <p>Price: {price}</p>
        </div>
    );
}
export default CakeCard;