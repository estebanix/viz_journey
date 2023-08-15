import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faSquareTwitter, faResearchgate } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="footer--container">
            <p>SOCIALS:</p>
            <ul>
                <li><FontAwesomeIcon style={{color:"#000000"}} icon={faGithub} /> GITHUB</li>
                <li><FontAwesomeIcon style={{color:"#1DA1F2"}} icon={faSquareTwitter} /> TWITTER</li>
                <li><FontAwesomeIcon style={{color:"#79E9D3"}} icon={faResearchgate} /> RESEARCH GATE</li>
            </ul>
        </footer>
    );
}