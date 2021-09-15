import React from 'react';
import styled from "styled-components";
import SliderScreen from './SliderScreen';
import Product from './Product';

const HomeScreen = () => {
    return (
        <Container>
            <SliderScreen/>
            <Product/>

        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    


    :before{
        content: " ";
        position: absolute;
        background: url("/images/home-background.png");
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        z-index: -1;

        
    }
`
