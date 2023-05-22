import "./Delivery.css";
import image from "../assets/2023-05-19_07-27-42.png";
export default function Delivery() {
  return(
    <div className="Delivery">
      <div className="Row">
        <div className="Col-6">
      <h2> 
        {" "}
        We have a delivery
        <p>We have a lot of</p></h2>

       </div>
       <div className="Col-6">
        <div className="Delivery-y">
      <img src={image} alt ="image-gril"/>
    </div>
    </div>
    </div>
    </div>
  )
}