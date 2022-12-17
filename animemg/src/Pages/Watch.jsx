import ReactPlayer from "react-player";
import { Container } from "@mui/system";
import { useLocation, useParams} from "react-router-dom";
import { useEffect } from "react";

function Watch() {
  const { url } = useParams();
  useEffect(() => {
    console.log(url)
  }, [])
  
  // const { query, search } = useLocation(); 
  return (
    <div className="main">
      <Container maxWidth="lg" className="container">
        <ReactPlayer
          width={"inherit"}
          height={"70vh"}
          controls={true}
          url={url}
        />
      </Container>
    </div>
  );
}

export default Watch;
