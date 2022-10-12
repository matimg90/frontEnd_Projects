import Title from "../components/Title";
import CarouselComp from "../components/CarouselComp.jsx";
function Home() {
  return (
    <div className="body">
        <section>
          <Title text="Best bookstore in America"></Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A vero
            nostrum dolorum ex deserunt, aliquid quam labore veniam porro
            voluptatum ad eveniet dolorem aperiam sunt dolore numquam dicta
            voluptatem itaque eius eos voluptate! Inventore, consectetur
            maiores! Nisi quam possimus officiis eligendi, ipsam delectus hic.
            Iusto cum eveniet dignissimos voluptate odit!
          </p>
        </section>
        <section className="bookSection">
          <div className="featuredBooks">
            <h2>Featured Books</h2>
            <CarouselComp></CarouselComp>
          </div>
          <div className="mostSoldBooks">
            <h2>Most sold Books</h2>
            <CarouselComp></CarouselComp>
          </div>
        </section>
      </div>
  );
}

export default Home;
