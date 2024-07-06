import { FaTelegram, FaWhatsapp, FaPhone, FaCartPlus, FaList } from "react-icons/fa";
import "./header.css"

const Header = () => {
    return ( 
        <div style={{
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            backgroundColor: "pink"
        }}>
            <div style={{
                display: 'flex',
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <button><FaTelegram /></button>
                <button><FaWhatsapp /></button>
                <button><FaPhone /></button>
            </div>
            <span style={{
                fontWeight: 400,
                fontSize: 40,
                color: "#FF67D4",
                marginRight: "33%"
            }}>Астра</span>
            <div style={{
                display: 'flex',
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <button><FaCartPlus /></button>
                <button><FaList /></button>
                <button><span>Войти</span></button>
            </div>
        </div>
     );
}
 
export default Header;