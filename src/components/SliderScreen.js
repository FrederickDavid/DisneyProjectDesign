import React from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sliderimg1 from "./images/slider-badag.jpg"
import Sliderimg2 from "./images/slider-badging.jpg"
import Sliderimg3 from "./images/slider-scale.jpg"
import Sliderimg4 from "./images/slider-scales.jpg"


const SliderScreen = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return (
        <Container>
        <Wrapper>
        <MySlider {...settings}>
          <MyStyled>
            <SliderImg src={Sliderimg1}/>
          </MyStyled>
          <MyStyled>
            <SliderImg src={Sliderimg2}/>
          </MyStyled>
          <MyStyled>
            <SliderImg src={Sliderimg3}/>
          </MyStyled>
          <MyStyled>
            <SliderImg src={Sliderimg4}/>
          </MyStyled>
        </MySlider>
     </Wrapper>
        </Container>
    )
}

export default SliderScreen

const Container = styled.div `
width: 100%;
height: 400px;`

const Wrapper = styled.div `
width: 80%;
margin: 0 auto;`

const MyStyled = styled.div `
width: 100%;
height: 300px;
border-radius: 10px;
color: black;
background-color: white;
border: 1px solid black;
transition: all 350ms;

:hover{
  border: 2px solid white;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
  rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
}`

const SliderImg = styled.img `
width: 100%;
height: 100%;
border-radius: 10px;
border: solid 1px white;
object-fit: cover;
z-index: -1;`

const MySlider = styled(Slider) `
margin-top: 20px;

li.slick-active{
  color: white;
}

button{
  z-index: 1;
}
.slick-list{
  overflow: visible;
}`

