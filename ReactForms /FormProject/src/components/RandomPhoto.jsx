import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
function RandomPhoto() {
  const [image, setImage] = useState([]);
  const getRandomPhoto = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          headers: {
            Authorization:
              "Client-ID rDISRwLGKob1E_JLGrM0r2V8E_HnGvx4aQCnZCQIKFo",
          },
          params: {
            count: 20,
            query: "cars",
          },
        }
      );
      setImage(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(image);
  useEffect(() => {
    getRandomPhoto();
  }, []);

  return (
    <div className="ımagesDiv">
      {image.map((photo, index) => {
        return (
          <Card className="card" style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={photo.urls.regular} />
            <Card.Body>
              <Card.Title>{photo.alt_description || "Anonim"}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default RandomPhoto;
