import { useSelector } from "react-redux";
const Bagsummary = () => {
  const bag = useSelector((store) => store.bag);
  const item = useSelector((store) => store.item);

  const Finalitem = item.filter((item) => {
    return bag.includes(item.id);
  });

  const COVIENENCE_FEES = 99;
  let totalItem = bag.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  Finalitem.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + COVIENENCE_FEES;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS {totalItem} Item </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">{COVIENENCE_FEES}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default Bagsummary;
