import CakeCard from "./CakeCard";

function CakeContainer(props) {
    //Refactor this later
    // const cakes = props.map((cake => {
    //     return <CakeCard key={cake} cakeObj=
    // }
    return (
        <>
        {props.cakeList.map(cake => <CakeCard cakeObj={cake}/>)}
        </>
    );
}

export default CakeContainer