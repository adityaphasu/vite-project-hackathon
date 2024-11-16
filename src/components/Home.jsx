import { Link } from "react-router-dom";
import Button from "./Button";

const Home = () => {
  return (
    <>
      <div className="link">
        <Link to="/positions">Positions</Link>
      </div>
      <div className="container">
        <Button text="Open position" />
        <Button text="Liquidate Position" />
        <Button text="Increase Collateral" />
        <Button text="Decrease Collateral" />
        <Button text="Increase position size" />
        <Button text="Decrease position size" />
        <div className="container_2">
          <Button text="View all positions" />
        </div>
      </div>
    </>
  );
};
export default Home;
