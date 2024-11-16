import PositionCard from "./PositionCard";
const fakePosition = {
  positionOwner: "0xAbc123456789DefABC123456789DefAbc1234567",
  collateralInUSD: 2500,
  isLong: true,
  creationSizeInUSD: 5000,
  positionID: "0x1234567890abcdef1234567890abcdef1234567890abc",
  size: 10,
  creationTime: 1699921234,
};

const PositionPage = () => {
  return (
    <div>
      <PositionCard position={fakePosition} />
    </div>
  );
};
export default PositionPage;
