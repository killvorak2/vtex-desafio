import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  margin: auto;

  section{
    height:100vh;
    width:100%;
    background: #753a88;
    /* background-image: linear-gradient(#cc2b5e → #753a88); */
    display: flex;

    .product-content{
      display: grid;
      margin: 0 .78125% 50px;
      text-align: center;
      height:550px;
      background: #f1f1f1;
      border-radius: 12px;
      padding:12px;

    }
  }

`