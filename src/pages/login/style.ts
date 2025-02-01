import styled from "styled-components";




export const Container = styled.div`
    background-color: #f0f2f5;
    width: 100%;
    height: 55vh;
    min-width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 132px ; 
    padding-top: 92px;
    margin: 0;
`
export const Content = styled.main`
    width: 100%;
    
    max-width: 1200px;
    height: 100%;
    max-height: 1200px;
    display: flex;
    justify-content: space-around;
    align-items: center; 
    flex-wrap: wrap;

  
`
export const LogoBox = styled.div`
    padding: 12px;
    width: 100%;
    max-width: 700px;
    height: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    @media (max-width:1100px) {
        justify-content: center;
    }
`

export const BigLogo = styled.img`
   
    width: 100%;
    height: 50%;
    max-width: 400px;
    align-self: flex-start;
    background-size: cover;
`

export const Text = styled.div`
    font-size: 1.4rem;
    width: 100%;
`



