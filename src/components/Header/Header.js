import logo from "./../../img/batterfly-removebg-preview.png"
import alert from "./../../img/alert-removebg-preview.png"
import message from "./../../img/message-removebg-preview.png"
function Header(){
    return(
    <div className = 'header'>
      <a className = "link-logo"><img className = "logo" src = {logo}/></a>

      <div className="header-title"> <h1 className="title">Здравствуйте, Артём!</h1></div>

      <div className="header-icons">
        <a className="icons-alert"><img className="alert" src={alert}/> </a>
        <a className="icons-message"><img className="message" src={message}/> </a>
      </div>
      
    </div>
    )
}
export default Header