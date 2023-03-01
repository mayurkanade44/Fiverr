import { CategoryCard, Featured, Slide, TrustedBy } from "../../components";
import { cards } from "../../data";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={1}>
        {cards.map((card) => (
          <CategoryCard item={card} key={card.id} />
        ))}
      </Slide>
    </div>
  );
};
export default Home;
