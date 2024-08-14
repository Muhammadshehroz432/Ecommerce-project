import { GrAddCircle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bag";

const Homeitem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const itemFound = bag.indexOf(item.id) >= 0;
  const Handleaddtobag = () => {
    dispatch(bagAction.Addtobag(item.id));
  };
  const Handleremovebag = () => {
    dispatch(bagAction.RemovefromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          ${item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">{item.discount_percentage}% OFF</span>
        </div>
        {itemFound ? (
          <button
            type="button"
            class=" btn-add-bag btn btn-danger"
            onClick={Handleremovebag}
          >
            <span className="me-2">
              <MdDelete />
            </span>
            Remove
          </button>
        ) : (
          <button
            type="button"
            class=" btn-add-bag btn btn-success"
            onClick={Handleaddtobag}
          >
            <span className="me-2">
              <GrAddCircle />
            </span>
            Add to bag
          </button>
        )}
      </div>
    </>
  );
};

export default Homeitem;
