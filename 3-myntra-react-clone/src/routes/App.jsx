import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Fetchitem from "../Components/Fetchitem";
import { useSelector } from "react-redux";
import LoadSpinner from "../Components/LoadingSpinner";
function App() {
  const fetchstatus = useSelector((store) => store.fetchstatus);
  return (
    <>
      <Header />
      <Fetchitem />
      {fetchstatus.CurrentlyFetching ? <LoadSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
