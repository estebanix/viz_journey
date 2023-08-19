import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function SideProfil(){
    return (
        <main className="side-profile--container">
            <img src="../Images/photo.jpg" />
            <h2>Samuel Kertés</h2>
            <p>Dovi Dopi Do</p>
            <ul>
                <li><FontAwesomeIcon icon={faLocationDot} /> Prague</li>
                <li><FontAwesomeIcon icon={faTwitter} /> Twitter</li>
                <li><FontAwesomeIcon icon={faEnvelope} /> Email</li>
            </ul>
        </main>
    );
}