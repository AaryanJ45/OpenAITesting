import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 10px;
  width: 500px;
  color: black; 
  font-size: 18px;
  border: 2px solid white;
  background-color: transparent;
  border-radius: 25px;

  /* Messing With Position */
  position: relative;
  
  ::-webkit-input-placeholder{
    color: white;
    opacity: 100%;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    opacity: 100%;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
    opacity: 100%;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: white;
    opacity: 100%;
  }
`;