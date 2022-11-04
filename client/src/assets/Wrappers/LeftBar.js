import styled from 'styled-components'
import Bg_1 from "../images/bg_1.jpg"


const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${'' /* padding-top: 50px; */}
    background-image: url(https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80);
    background-position: center;
    height: 100vh;

    .logo{
        color: white;
        margin-bottom: 2%;
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${'' /* margin-bottom: 40px; */}
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
    color: white;
  }
  .form-input,
  .form-select,
  .btn-block {
    ${'' /* height: 35px; */}
    background-color: gray;
  }
  .form-row {
    ${'' /* margin-bottom: 0; */}
  }
  .formcenter {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  .search{
      ${'' /* padding: 10% 0 10% 0; */}
      padding-bottom: 10%;
      ${'' /* margin: 0 2%; */}
      align-items: center;
      text-align: center;

      background: rgba( 255, 255, 255, 0.1 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );


  }
`
export default Wrapper