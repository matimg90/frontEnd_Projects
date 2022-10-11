import data from '../books.json';
import { useParams, useLocation } from "react-router-dom";
import Book from '../components/Book';
import './Detail.css'

function Detail(){
    const location = useLocation()
    const { book } = location.state
    const {index} = useParams();
    return(
        <div className="modal">
            <p className="modal__title">{book.title}</p>
            <Book
             title={book.title.toString()}
             author={book.author.toString()}
             country={book.country.toString()}
             imageLink={book.imageLink.toString()}
             language={book.language.toString()}
             link={book.link.toString()}
             pages={book.pages.toString()}
             year={book.year.toString()}
             index={book.index}
           />
            <div className="modal__buttons">
                <button>Add to cart</button>
                {/* <button className="btn btn__cancel" onClick={cancelModal}>Cancelar</button>
                <button className="btn" onClick={confirmModal}>Confirmar</button> */}
            </div>
            <div className="backdrop"></div>
        </div>
    )
}

export default Detail;