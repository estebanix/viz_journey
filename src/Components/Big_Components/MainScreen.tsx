import MainScreenAbout from "../Small_Components/MainScreenAbout";
import PostCont from "../Small_Components/PostsCont";
import { StreamGraph } from '../Stream_Graph/Streamgraph';
import {data} from "../../Datas/data";

const width = 920;
const height = 460;

export default function MainScreen() {

  return (
    <main className="main-screen--container">
      <MainScreenAbout />
      {data ? (
        <StreamGraph data={data} width={width} height={height} />
      ) : (
        <pre>Loading...</pre>
      )}
      <PostCont />
    </main>
  );
}
