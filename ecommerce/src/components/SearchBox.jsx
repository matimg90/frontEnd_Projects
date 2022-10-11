import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Nav'
function SearchBox() {
  const navigate = useNavigate();
  const [inputText,setInputText] = useState('');
  const handleChange = ((event) =>{
    setInputText(event.target.value)
  });

  function searchBook(book){
    setInputText((prevText) => prevText = '')
      return(
        navigate(`/shop/%${book}%`)
      )
  }
    return (
        <>
            <input className="searchBox__box" 
              type="text" 
              placeholder="Buscar..."
              value={inputText}
              onChange={handleChange}
              onKeyPress={e =>(e.key ==='Enter' && searchBook(e.target.value))}
             />
        </>
    );
  }

export default SearchBox;

