import styled from 'styled-components'
import {NavLink as Link} from 'next/link'


export const Nav = styled.nav`
  background: #1C1B3B;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1200px)/2);
  z-index: 1000;
`
export const NavLink = styled(Link)`
  color: #fff !important;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none !important;
  transition: 0.7s ease-in-out;
  padding: 0 1rem; 
  font-size:16px !important;
  height: 100%;
  cursor: pointer;

  &.active{
      color: #15cdfc;
      
  }
  &:hover{
      text-decoration: none !important;
      border-bottom: 2px solid #fff;
      
  }
@media screen and (max-width: 960px) {
  border-bottom: 1px dashed #fff;
} 

`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:960px){
display:block;
position:absolute;
color: #fff;
top:16px;
right:20px;
transform:translate(-100%; 60%);
font-size:1.8rem;
cursor:pointer;
transition:all .5s linear;
}
`
export const NavMenu = styled.ul`
display:flex;
justify-content:center;
align-items:center;
text-align-center;

@media screen and (max-width:960px){
    display:flex;
    flex-direction:column;
    position:absolute;
    width:100%;
    height:68vh;
    margin-bottom:20px;
    padding:0;
    z-index: 1000;
    top:80px;
    left:${({ click }) => (click ? 0 : '-100%')};
    opacity:1;
    transition: all 0.5s ease;
    background:#1C1B3B;   
}
`