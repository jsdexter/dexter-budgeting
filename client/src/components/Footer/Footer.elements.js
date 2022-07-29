import styled from "styled-components";

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
// `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Heading = styled.h4`
  display: flex;
  align-self: flex-start;
`;

export const Title = styled.h1``;

export const Button = styled.button`
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 80vw;
`;

export const SelectOption = styled.select`
  width: 80vw;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 90%;
  height: 680px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  color: #000000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const CloseModalButton = styled.div`
  cursor: pointer;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 10px;
  width: 22px;
  padding: 0;
  z-index: 10;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;
