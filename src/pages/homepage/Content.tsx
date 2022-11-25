import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';

const contentStyle: React.CSSProperties = {
   margin: 0,
   height: '500px',
   color: '#fff',
   textAlign: 'center',
   background: '#364d79',
};

const Banner: React.FC = () => {
 

   return (
      <Container className='Banner pt-[92px]'>
   
      </Container>
   )
}

export default Banner
const Container = styled.div`
   &.Banner{
      .ant-carousel .slick-next, .ant-carousel .slick-prev{
         width:initial;
         height:initial;
         z-index:1;
      }
      .ant-carousel .slick-prev {
         left: 20px;
      }      
      .ant-carousel .slick-prev:before{
         color: #f59e0b;
         font-size:80px;
         font-weight:600;
         opacity:0.6;
         content:'\\276C';
         transition: all 0.5s;
      }
      .ant-carousel .slick-prev:hover::before{
         opacity:1;
      }

      .ant-carousel .slick-next {
         right: 20px;
      }
      .ant-carousel .slick-next:before{
         color: #f59e0b;
         font-size:80px;
         font-weight:600;
         opacity:0.6;
         content:'\\276D';
         transition: all 0.5s;
      }
      .ant-carousel .slick-next:hover::before{
         opacity:1;
      }
      .ant-carousel .slick-dots{
         right:initial;
         margin:0;
         left:50px;
      }
      .ant-carousel .slick-dots li{
         height:initial;
      }
      .ant-carousel .slick-dots li button{
         height:15px;
         background-color:#f59e0b;
      }
   }
`