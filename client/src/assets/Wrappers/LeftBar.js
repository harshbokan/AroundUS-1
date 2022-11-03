import styled from 'styled-components'
import Bg_1 from "../images/bg_1.jpg"


const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;
    background-image: url(https://images.unsplash.com/photo-1518710920008-43f70d20e48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80);
    background-position: center;
    height: 100vh;

    .logo{
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
    }
    .logo img{
        width: 40%;
        height: 40%;
    }
    .form {
    width: 400px;
    max-width: 400px;
    
    /* align-items: center; */
    
  }
  .form h1{
    color: green
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
    background-color: gray;
  }
  .form-row {
    margin-bottom: 0;
  }
  .formcenter {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  .search{
      align-items: center;
      text-align: center;
      ${'' /* margin-top: 50px; */}
      /* background-color: orange; */
      border-width: 3px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      green, 
      rgba(0, 0, 0, 0)
    ) 1 100%;
  }
`
export default Wrapper