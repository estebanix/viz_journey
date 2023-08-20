import MainScreenAbout from "../Small_Components/MainScreenAbout";
import PostCont from "../Small_Components/PostsCont";

export default function MainScreen(){
    return(
        <main className="main-screen--container">
            <MainScreenAbout />
            <img className="hero--img" src="../Images/hero.png" />
            <PostCont />
        </main>
    );
}