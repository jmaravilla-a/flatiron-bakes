import CakeCard from "./CakeCard";

function App() {
  return (
    <>
    <body background='black'></body>
    <h1>Bakery Name</h1>
    <CakeCard flavor={"Carrot and Walnut Cake"} price={20}/>
    <CakeCard flavor={"Chocolate"} price={25}/>
    <CakeCard flavor={"Vanilla"} price={28}/>
    </>
  );
}

export default App;
