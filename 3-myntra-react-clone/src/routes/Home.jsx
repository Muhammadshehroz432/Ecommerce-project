import Homeitem from "../Components/Homeitems";
import { useSelector } from "react-redux";
const Home = () => {
  const item = useSelector((store) => store.item);

  return (
    <>
      <main>
        <div class="items-container">
          {item.map((item) => (
            <Homeitem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
