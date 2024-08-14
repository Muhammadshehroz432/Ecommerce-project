import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAction } from "../store/Fetchslice";
import { ItemAction } from "../store/Itemslice";

const Fetchitem = () => {
  const fetchstatus = useSelector((store) => store.fetchstatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchstatus.fetchDone) return;
    dispatch(fetchAction.fetchingStarted());
    fetch("http://localhost:7000/items")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchAction.fetchingEnded());
        dispatch(fetchAction.Markfetchdone());
        dispatch(ItemAction.addItems(data.items));
      });
  }, []);

  return <></>;
};

export default Fetchitem;
