import eyes from "../assets/eyes.png"
import "./Contacts.css"


export default function Contacts() {
  return (
    <div className="Contacts">
      <h1>If you want to contact us, call the following phone number</h1>
      <div className= "Row">
        <div className="Col-6">
          Our contacts: <br />
         +996702930488 <br/>
         +996702880488 <br />
         +996703978965 <br />
    </div>
    <div className="Col-6">
      <img className="Eyes" src={eyes} alt="photo-eyes" />
    </div>
    </div>
    <p><strong> Our adress:</strong>121 Lenina St, 8th house</p>
    </div>
  )
}