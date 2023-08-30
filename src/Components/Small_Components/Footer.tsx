import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSquareXTwitter, faResearchgate } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="footer--container">
            <p>SOCIALS:</p>
            <ul>
                <a href='https://github.com/estebanix'><li className='nav-li'><FontAwesomeIcon style={{color:"#000000"}} icon={faGithub} /> GITHUB</li></a>
                <a href='https://twitter.com/SamuelKertes'><li className='nav-li'><FontAwesomeIcon style={{color:"#14171A"}} icon={faSquareXTwitter} /> TWITTER</li></a>
                <li className='nav-li'><FontAwesomeIcon style={{color:"#79E9D3"}} icon={faResearchgate} /> RESEARCH GATE</li>
            </ul>
        </footer>
    );
}