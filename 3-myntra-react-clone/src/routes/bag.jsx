import { useSelector } from "react-redux";
import Bagitems from "../Components/Bagitems";
import Bagsummary from "../Components/BagSummary";

const Bag = () => {
  const item = useSelector((store) => store.item);
  const bag = useSelector((store) => store.bag);
  const Finalitem = item.filter((item) => {
    return bag.includes(item.id);
  });
  return (
    <>
      <main>
        <div class="bag-page">
          <div class="bag-items-container">
            {Finalitem.map((item) => (
              <Bagitems key={item.id} item={item} />
            ))}
          </div>
          <Bagsummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
