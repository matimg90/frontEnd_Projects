import "./Book.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Skeleton } from "@mui/material";
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
  return (
      <div className="book">
        {title.length > 0 ?
          <img
            className="image"
            src={`${process.env.PUBLIC_URL}/${imageLink}`}
            alt=""
          /> :  <Skeleton></Skeleton>}
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
