import styled from 'styled-components'

export const HomeContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Content = styled.div `
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input `
    border: 1px solid #ddd;
    width:20rem;
    height: 3rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    font-size:20px;
    &:focus,
    &:active{
        outline:none;
        box-shadow:none;
    }
`

export const Button = styled.button `
height: 3.3rem;
border: 1px solid #000;
background: #000;
color: #fff;
border-radius: 0 .25rem .25rem 0;
    &:focus,
    &:active{
        outline:none;
        box-shadow:none;
    }
`

export const ErrorMsg = styled.span `
    display:block;
    font-size:14px;
    color: red;
    font-weidht:600;
    margin-top: 1rem;
`