import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = ({ imgNumber, setImgNumber, fetchError, imgUrl }) => {

  const dots = [1, 2, 3, 4, 5, 6];

  const handleNextClick = () => {

    if (imgNumber === dots[dots.length - 1]){

      setImgNumber(dots[0])

    } else {
      setImgNumber(imgNumber + 1)
    }

  }

  const handlePreviousClick = () => {

    if (imgNumber === dots[0]){

      setImgNumber(dots[dots.length - 1])

    } else {
      setImgNumber(imgNumber - 1)
    }

  }

  return (

    <main className='main'>

      {!fetchError &&

        <figure className='main__figure'>

          <div className='main__previous-photo' onClick={handlePreviousClick}>

            <FaArrowLeft className='main__arrow' size={'2em'}></FaArrowLeft>

          </div>

          <img src={imgUrl} alt="fetched photo" className='main__img' />

          <div className='main__next-photo' onClick={handleNextClick}>

            <FaArrowRight className='main__arrow' size={'2em'}></FaArrowRight>

          </div>

        </figure>

      }

      {fetchError && <h1 style={{color: 'red'}}>Did not receive the photo - refresh the page</h1>}

      <div className='main__container--dots'>

        {dots.map((dot, index) => {

          return (
            <div 

              className={imgNumber === dot ? 'main__dot active' : 'main__dot'}
              key={index}
              onClick={() => {setImgNumber(dot)}}

            ></div>
          )

        })}

      </div>

    </main>

  )

}

export default Slider
