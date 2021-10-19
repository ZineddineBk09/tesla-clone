import React, { useState } from 'react'
import styled from 'styled-components'
import logo from './images/logo.svg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [toggleOpen, setToggleOpen] = useState(false)

  return (
    <div>
      <Container>
        <a href=''>
          <img src={logo} alt='' />
        </a>
        <Menu>
          <a href='#'>Model S</a>
          <a href='#'>Model 3</a>
          <a href='#'>Model X</a>
          <a href='#'>Model Y</a>
        </Menu>
        <RightMenu>
          <a href='#'>Shop</a>
          <a href='#'>Tesla Account</a>
          <button
            className='toggle-btn'
            onClick={() => {
              setToggleOpen(true)
            }}
          >
            <AiOutlineMenu></AiOutlineMenu>
          </button>
        </RightMenu>
        {/* <Fade right> */}
        {true && (
          <BurgerNav toggleOpen={toggleOpen}>
            <CloseBtn>
              <button
                className='close-btn'
                onClick={() => {
                  setToggleOpen(false)
                }}
              >
                <AiOutlineClose />
              </button>
            </CloseBtn>
            <li>
              <a href='#'>Model S</a>
            </li>
            <li>
              <a href='#'>Model 3</a>
            </li>
            <li>
              <a href='#'>Model X</a>
            </li>
            <li>
              <a href='#'>Model Y</a>
            </li>
            <li>
              <a href='#'>Existing Inventory</a>
            </li>
            <li>
              <a href='#'>Used Inventory</a>
            </li>
            <li>
              <a href='#'>Existing Inventory</a>
            </li>
            <li>
              <a href='#'>Trade-in inventory</a>
            </li>
            <li>
              <a href='#'>Cybertruck</a>
            </li>
            <li>
              <a href='#'>Roadster</a>
            </li>
            <li>
              <a href='#'>Semi</a>
            </li>
            <li>
              <a href='#'>Charging</a>
            </li>
            <li>
              <a href='#'>Power</a>
            </li>
            <li>
              <a href='#'>Community</a>
            </li>
            <li>
              <a href='#'>Utilities</a>
            </li>
            <li>
              <a href='#'>Test Drive</a>
            </li>
          </BurgerNav>
        )}
        {/* </Fade> */}
      </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  .toggle-btn {
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 25px;
  }
  .toggle-btn:hover {
    transform: scale(1.2);
  }
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 1em;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 1em;
  }
`

const BurgerNav = styled.div`
  position: fixed;
  border-radius: 3px;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  /*99<100 ==> it will overlap the parent container "Container"*/
  z-index: 100;
  list-style: none;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  transform: ${(props) =>
    props.toggleOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s ;

  li {
    padding: 5px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  li:hover {
    background: #eee;
    transform: scale(1.05);
  }
  a {
    font-weight: 600;
  }
`
const CloseBtn = styled.div`
  .close-btn {
    cursor: pointer;
    margin-left: 90%;
    font-size: 25px;
    background: transparent;
    border: none;
  }
  .close-btn:hover {
    transform: scale(1.2);
  }
`
