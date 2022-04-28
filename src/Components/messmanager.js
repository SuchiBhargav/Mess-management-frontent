import React ,{useState,useEffect}from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import { Grid, Paper } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Graph from "./graph";
import { VictoryPie } from "victory-pie";
import Footermail from "./footermail";





const MessManager = () => {
  
  const [Rate,setRate] = useState();
  const [id, setId] = useState("1");
  console.log("id=",id);

  

  const Breakfastgraph = ()=> {
    axios.get("http://localhost:8084/getRating/1",
     {
  
     }).then(response=>{
      setRate(response.data);
      let obj = response.data;
      console.log("Breakfastgraph");
        
      
     
         
     });
     
   
     
}
const Lunchgraph = ()=> {
  axios.get("http://localhost:8084/getRating/2",
   {

   }).then(response=>{
    setRate(response.data);
    console.log("Lunchgraph" + Rate);
      
       
       
   });
   
 
   
}
const Dinnergraph = ()=> {
  axios.get("http://localhost:8084/getRating/3",
   {

   }).then(response=>{
    setRate(response.data);
    console.log("Dinnergraph" + Rate);
      
       
       
   });
   
 
   
}


 







            fetch("http://localhost:8084/getCountplates",{
              method:"GET",
          })
              .then((response) => response.json())
              .then((responseData)=>{
                  console.log(responseData);
                  console.log(responseData[0]);
                  // breakfastcount = responseData[0];
                  
                  document.getElementById("brkfast").innerText = responseData[0]?responseData[0]:0;
                  document.getElementById("lnch").innerText = responseData[1]?responseData[1]:0;
                  document.getElementById("dnr").innerText = responseData[2]?responseData[2]:0;;
                  
              })

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 400,
    margin: "30px 50px",
  };
  return (
    <>
      <div>
        {/* navbar of messmanager */}
        <div style={{ display: "block" ,width:1200}}>
          <Navbar bg="dark" variant="dark">
            
            <Navbar.Brand href="#home">Manager Dashboard</Navbar.Brand>
            
           
           
<button onClick={Breakfastgraph}>Breakfast-rating</button>
<button onClick={Lunchgraph}>Lunch-rating</button>
<button onClick={Dinnergraph}>Dinner-rating</button>
           
           
            <Button href ="login" style={{margin:"10px"}} align="right" variant="success" size="lg" margin="20px">
              LOGOUT
            </Button>
            
          </Navbar>
        </div>
        <br />

        {/* subheading of messmanager */}
        <div style={{ display: "block", backgroundColor: "#00cccc" ,padding: "10x"}}>
          <Navbar variant="light">
            <h3 align="center"> <b>Cooking with love provides food for the soul</b> </h3>
          </Navbar>
        </div>

        {/* graph showing and count of plates for food */}
        {/* graph */}
        
        <table>
          <tr>
            <td>
              <Paper elevation={7} style={paperStyle}>
                <Grid>
                <h1><i><b><ul>Food Ratings</ul></b></i></h1>
      <div style={{ height: 400 }}>
        <VictoryPie
          data={Rate}
          colorScale={["blue", "yellow", "red","green","black"]}
          radius={100}
        />
      </div>
                 
                </Grid>
              </Paper>
            </td>

            {/* count of plates of foood */}
            <td>
              <Paper elevation={7} style={paperStyle}  >
                <Grid>
                  <div style={{padding:"20px"}}>
                  <h2>
                  <h1><i><b><ul>SUMMARY</ul></b></i></h1>
                  </h2>
                  <br />
                  <br />
                  <h4>Breakfast Plate count: <span  id="brkfast"></span></h4>
                  <br />
                  <h4>Lunch Plate count:<span  id="lnch"></span> </h4>
                  <br />
                  <h4>Dinner Plate count:<span  id="dnr"></span> </h4>
                 
                  </div>
                </Grid>
              </Paper>
            </td>
          </tr>
        </table>
        <Footermail/>
      </div>
    </>
  );
};
export default MessManager;