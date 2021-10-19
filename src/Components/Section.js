import React from 'react'
import arrow from './images/down-arrow.svg'
import styled from 'styled-components'
import './Section.css'
import Fade from 'react-reveal/Fade'

const Section = ({ title, description, leftBtn, rightBtn }) => {
  console.log(title, description)
  return (
    <div
      //it's hard coded but i hd no choice thank god that Tesla have only 4cars
      className={`Wrap ${
        title == 'Model S'
          ? 'Wrap-S'
          : title == 'Model Y'
          ? 'Wrap-Y'
          : title == 'Model X'
          ? 'Wrap-X'
          : title == 'Model 3'
          ? 'Wrap-3'
          : title == 'Accessories'
          ? 'Wrap-acc'
          : title.split(' ').includes('Panels')
          ? 'Wrap-SP'
          : 'Wrap-SR'
      }`}
    >
      {/* Model */}
      <Fade bottom>
        <div className='itemText'>
          <h1>{title}</h1>

          <p>{description}</p>
        </div>
      </Fade>

      {/* Buttons */}
      <Fade bottom>
        <div className='Buttons'>
          <div className='ButtonGroup'>
            <button className='leftButton'>{leftBtn}</button>
            {rightBtn && <button className='rightButton'>{rightBtn}</button>}
          </div>
          <div className='downArrow'>
            <img src={arrow} alt='' />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Section

//__THE CODE BELLOW IS NOT NEEDED__
const Wrap = styled.div`
  /* "display: flex" is for the buttons and title of the page */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /*vertically*/
  align-items: center; /*horizontally*/
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('./images/model-s.jpg');
`
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const LeftButton = styled.div`
  margin: 1em;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  border: 0;
  /* I tried to remove the display,justify-content,align-items from the button selector and nothing changed so i think we can remove them */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`
const RightButton = styled.div`
  margin: 1em;
  background-color: white;
  color: rgb(23, 26, 32);
  height: 40px;
  width: 256px;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`
const DownArrow = styled.img`
  height: 40px;
  /*animateDown is a CSS function that we create*/

  animation: animateDown infinite 1.5s;
  overflow-x: hidden; /*because when our arrow moves it causes the scroll bar to show up*/
`
