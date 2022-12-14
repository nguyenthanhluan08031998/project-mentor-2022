import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

const Header = props => { // function Header (props){
    return (
        <div className="header">
            <HeaderTop />
            <HeaderBottom />
        </div>
    )
}
export default Header;


