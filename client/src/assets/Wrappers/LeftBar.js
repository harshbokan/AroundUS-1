import styled from 'styled-components'

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;

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