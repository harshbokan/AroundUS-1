import styled from "styled-components"

const Wrapper = styled.main`

display: flex;
flex-direction: column;

.nav{
    display: flex;
    /* background-color: red; */
    justify-content: right;
    align-items: flex-end;
    padding: 20px 50px;
}
.list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

`

export default Wrapper