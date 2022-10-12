import "./Book.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//import { Link } from "react-router-dom";
function Book({
  title,
  author,
  country,
  imageLink,
  language,
  link,
  pages,
  year,
  index,
}) {
  //const images = require.context("../", true);
  //const cover = images(`${imageLink}`).default;
  return (
      <div className="book">
          <img
            className="image"
            src={`${process.env.PUBLIC_URL}/${imageLink}`}
            alt=""
          />
        <div className="book__info">
          <div>
            <label htmlFor="" className="book__info--items">
              {title.length > 0 ? `Title: ${title}` : <Skeleton></Skeleton>}
            </label>
          </div>
          <div>
            <label htmlFor="" className="book__info--items">
              {author.length > 0 ? `Author: ${author}` : <Skeleton></Skeleton>}
            </label>
          </div>
          <div>
            <label htmlFor="" className="book__info--items">
              {author.length > 0 ? (
                `Language: ${language}`
              ) : (
                <Skeleton></Skeleton>
              )}
            </label>
          </div>
          {/* <div>
          <label htmlFor="" className="book__info--items">
          {author.length > 0 ? `Index: ${index}` : <Skeleton></Skeleton>}
          </label>
        </div> */}
        </div>
      </div>
    //   <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${imageLink}`} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Subtitle>
    //       {`Author: ${author}`}
    //     </Card.Subtitle>
    //     <Card.Link href={link}>
    //       Link
    //     </Card.Link>
    //     <Button variant="Success">Add to cart</Button>
    //   </Card.Body>
    // </Card>
  );
}

export default Book;
