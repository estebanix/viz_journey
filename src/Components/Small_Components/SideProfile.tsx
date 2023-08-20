import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function SideProfil(){
    return (
        <main className="side-profile--container">
            <img src="../Images/photo.jpg" />
            <h2>Samuel Kertés</h2>
            <p>Dovi Dopi Do</p>
            <ul>
                <li><FontAwesomeIcon icon={faLocationDot} /> Prague</li>
                <li><a href='https://www.linkedin.com/' target="_blank"><FontAwesomeIcon icon={faLinkedin} className='linkedin' /> LinkedIn</a></li>
                <li><a href="mailto:samuelkertes@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='envelope'/> Email</a></li>
            </ul>
            
        </main>
    );
}