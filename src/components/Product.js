import React from 'react'
import styled from 'styled-components';
import image1 from "./images/disney.png"
import image2 from "./images/pixar.png"
import image3 from "./images/marvel.png"
import image4 from "./images/starwars.png"
import image5 from "./images/national.png"
import disney from "./videos/disney.mp4"
import pixar from "./videos/pixar.mp4"
import marvel from "./videos/marvel.mp4"
import starwars from "./videos/star-wars.mp4"
import national from "./videos/national-geographic.mp4"

const Product = () => {
    return (
        <Container>
            <Wrapper><img src={image1}/>
            <video 
            src={disney}
            type="video/mp4"
            autoPlay= {true}
            loop
            muted
            playsInline
            />
            </Wrapper>
            <Wrapper><img src={image2}/>
            <video 
            src={pixar}
            type="video/mp4"
            autoPlay= {true}
            loop
            muted
            playsInline
            />
            </Wrapper>
            <Wrapper><img src={image3}/>
            <video 
            src={marvel}
            type="video/mp4"
            autoPlay= {true}
            loop
            muted
            playsInline
            />
            </Wrapper>
            <Wrapper><img src={image4}/>
            <video 
            src={starwars}
            type="video/mp4"
            autoPlay= {true}
            loop
            muted
            playsInline
            />
            </Wrapper>
            <Wrapper><img src={image5}/>
            <video 
            src={national}
            type="video/mp4"
            autoPlay= {true}
            loop
            muted
            playsInline
            />
            </Wrapper>
        </Container>
    )
}

export default Product;

const Container = styled.div `
margin-top: 20px;
display: grid;
grid-template-columns: repeat(5, minmax(0, 1fr));
grid-gap: 20px;
padding: 20px;
`

const Wrapper = styled.div `
width: 100%;
height: 180px;
border-radius: 5px;
border: 2px solid gray;
color: black;
transition: all 350ms;
transform: scale(1);
position: relative;

 img{
    height: 100%;
    width: 100%;
    object-fit: contain;
    z-index: 100;
    border-radius: 5px;
}

 video{
     position: absolute;
     left: 0;
     z-index: -100;
     width: 100%;
     height: 100%;
     object-fit: cover;
     opacity: 0;
     transition: all 350ms;
     border-radius: 3px;
 }

 :hover{
    transition: all 350ms;

    transform: scale(1.03);

     border: 4px solid white;
     cursor: pointer;
     box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
                 rgb(0 0 0/73%) 0px 16px 10px -10px;

    video{
        opacity: 1;
    }
 }
`
