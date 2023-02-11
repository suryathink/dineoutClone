import SingleCard from "./SingleCard";
import sty from "./Styles/AllCards.module.css"
function AllCards() {
  return (
    <div className={sty.allcards}>
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </div>
  );
}
export default AllCards;
