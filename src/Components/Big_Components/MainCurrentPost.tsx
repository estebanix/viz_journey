import SideProfil from "../Small_Components/SideProfile";
import CurrentPost from "../Small_Components/CurrentPost";

export default function MainCurrentPost(){
    return(
        <main className="main-current-post--container">
            <SideProfil />
            <CurrentPost />
        </main>
    );
}