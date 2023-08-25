import MainScreenAbout from "../Small_Components/MainScreenAbout";
import PostCont from "../Small_Components/PostsCont";
import { useData } from '../Stream_Graph/useData';
import { StreamGraph } from '../Stream_Graph/Streamgraph';

const width = 920;
const height = 460;

export default function MainScreen() {
  const data = useData();

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
