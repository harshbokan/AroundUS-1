import styled from "styled-components"

const Wrapper = styled.main`
    .row {
    margin-bottom: 1rem;
  }
.label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
.input,
.textarea,
.select {
  width: 90%;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  background: #f0f4f8;
  border: 1px solid #bcccdc;
}
.input,
.-select,
.block {
  height: 35px;
}

`
export default Wrapper