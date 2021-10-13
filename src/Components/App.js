import Header from "./Header";
import Search from "./Search";
import CakeContainer from "./CakeContainer";
import {cakes} from "../Data/cakesData"

function App() {
  return (
    <>
      <Header />
      <Search />
      <CakeContainer cakeList={cakes} />
      <body background='black'></body>
      <h1>Bakery Name</h1>
    </>
  );
}

export default App;


// <CakeCard flavor={"Carrot and Walnut Cake"} price={20}/>
//     <CakeCard flavor={"Chocolate"} price={25}/>
//     <CakeCard flavor={"Vanilla"} price={28}/>