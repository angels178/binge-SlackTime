import Spinner from "../Spinner/Spinner";
import "./Overlay.css";

function Overlay({children, isLoading}) {
  return (
    <>
    {isLoading && <Spinner />}
    {children}
    </>
  )
}

export default Overlay