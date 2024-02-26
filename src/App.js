import Slider from './Slider';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  //const API_KEY = 'iGrDzxcjM4QmT0gsKO9ylHYxGLhTswD3fvU835GQk0nv8qxx7VHJbG6z';
  //const URL = 'https://api.pexels.com/v1/photos/';
  const URL = 'http://localhost:3100/items';

  const [imgNumber, setImgNumber] = useState(1);
  const [imgUrl, setImgUrl] = useState('');
  const [fetchError, setFetchError] = useState(null);


  useEffect(() => {

    const fetchPhoto = async () => {

      try {

        const response = await axios.get(`${URL}/${imgNumber}`);
        console.log(response.data.src);
        const fetchedPhotoUrl = response.data.src;
        setImgUrl(fetchedPhotoUrl);

      } catch (err) {

        if (err.response) {

          console.log(err.response.data);
          console.log(err.response.headers);
          console.log(err.response.status);
          setFetchError(err.response.data);

        } else if (err.request) {
          console.log(err.request)
          setFetchError(err.message);
        } else {
          console.log(err.message)
          setFetchError(err.message);
        }

      }

    }

    fetchPhoto();

  }, [imgNumber])



  return (

    <div className="App">

      <header className="header">
        <h1 className="header__h1">Slider project using react and photo API</h1>
      </header>

      <Slider

        imgNumber={imgNumber}
        setImgNumber={setImgNumber}
        fetchError={fetchError}
        imgUrl={imgUrl}

      ></Slider>

    </div>

  );
}

export default App;
