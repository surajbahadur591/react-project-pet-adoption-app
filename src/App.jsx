import "./App.css";
import { React } from "react";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

function App() {
  return (
    <div className="header-fix">
      <img src="./images/logo-pet.jpg" height="50px" alt="logo"></img>
      <h2 className="h2-fix">Find Your <span className="dream-color">Dream</span>  Pet Here <img src="./images/cat.jpg" width="30px" alt="" /></h2> 
      
      <div className="content-fix">

      <SearchParams></SearchParams>
        {/* <Pet image='' name='Amber' age='4 years' weight='7 kg' location='Mumbai' ></Pet>
        

        <Pet image='' name='Scooby' animal='Dog' age='10 years' weight='16 kg' location='Hyderabad' ></Pet>

        <Pet image='' name='Tommy' animal='Dog' age='6 years' weight='6 kg' location='Delhi' ></Pet> */}
      </div>
    </div>
  );
}

export default App;
