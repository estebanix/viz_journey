import {Link} from 'react-router-dom';

export default function Nav(){
    return(
        <nav className="nav--container">
            <img src="../Images/photo.jpg" />
            <h3><Link to="/">SAMUEL KERTÉS</Link></h3>
            <ul>
                <li className="nav-li"><Link to="/dataviz">Articles</Link></li>
                <li className="nav-li"><Link to="/about">About</Link></li>
                <li className="nav-li"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}