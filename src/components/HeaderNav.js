import React from 'react'
import styled from 'styled-components'
import logo from "./images/logo.svg"
import imgHome from "./images/home-icon.svg"
import imgMovie from "./images/movie-icon.svg"
import imgSeries from "./images/series-icon.svg"
import imgWatchlist from "./images/watchlist-icon.svg"
import imgSearch from "./images/search-icon.svg"
import imgOriginal from "./images/original-icon.svg"
import avatar from "./images/image1.jpg"

const HeaderNav = () => {
    return (
        <Container>
            <Logo src={logo}/>
            <Wrapper>

                <a>
                    <img src={imgHome}/>
                    <span>Home</span>
                </a>
                <a>
                    <img src={imgMovie}/>
                    <span>Movie</span>
                </a>
                <a>
                    <img src={imgSeries}/>
                    <span>Series</span>
                </a>
                <a>
                    <img src={imgWatchlist}/>
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src={imgSearch}/>
                    <span>Search</span>
                </a>
                
                <a>
                    <img src={imgOriginal}/>
                    <span>Original</span>
                </a>
                
            </Wrapper>

            <Avatar>
                <AvatarPix src={avatar}/>
                <span>Frederick</span>
            </Avatar>
       
        </Container>

    )
}

export default HeaderNav

const Container = styled.div`
    width: 100%;
    height: 90px;
    background-color: rgb(17, 17, 17);
    display: flex;
    justify-content: center;
    align-items: center;

`

const Logo = styled.img`
    width: 120px;
    height: 50%;
    margin: 20px;
    object-fit: contain;

`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    a{
        display: flex;
        align-items: center;
        margin: 20px;

        img{
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }

        span{
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        position: relative;

        :after{ 
            content: " ";
            position : absolute;
            width: 100%;
            height: 2px;
            background-color: whitesmoke;
            left: 0;
            bottom: -2px;
            transform: scale(0);
            transition: all 350ms;
            transform-origin: center left;
            opacity: 0;
           }
        }

        :hover{
            cursor: pointer;
            span{
                opacity: 1;
                :after{
                    opacity: 1;
                    transform: scale(1.05);
                }
            }
        }

    }

    
`
const Avatar = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;
    padding-top: 35px;

    span{
        opacity: 0;
        transition: all 350ms;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 12px;
    }
    :hover{
        cursor: pointer;
        span{
            opacity: 1;
        }
    }
`
const AvatarPix = styled.img`
    background-color: whitesmoke;
    width:50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid whitesmoke;
    object-fit: cover;


`