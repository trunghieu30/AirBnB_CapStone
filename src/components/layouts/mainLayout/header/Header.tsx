import React from 'react'
import styled from 'styled-components'
const Header = () => {

  return (
   <Container className=''>

   </Container>
   )
}

export default Header

const Container = styled.div`
   &.Header{
      .Menu .active{
         &:before{
            content:'';
            position: absolute;
            bottom:-10px;
            height:2px;
            width:50%;
            background-color:#f59e0b;
            left:50%;
            transform:translateX(-50%);
            @media screen and (max-width:1024px) {
               left:0;
               transform:translateX(0);
               bottom: -5px;
            }
         }
      }
   }
`