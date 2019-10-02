import React from "react";
import styled from "styled-components";

const RowContainer = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2% 0;
`;
const Left = styled.span`
  display: flex;
  flex-grow: 1;
  text-align: left;
  font-weight: 700;
  align-items: center;
`;

const Right = styled.span`
  display: flex;
  flex-grow: 3;
  flex-direction: row-reverse;
  padding: 1.5% 0;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #f2f2f2;
  text-align: right;
  width: 100%;

  @media (max-width: 800px) {
    width: 80%;
    display: flex;
    flex-grow: 2;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    background-color: #f2f2f2;
    text-align: right;
  }
`;

const Input = styled.input`
  display: flex;
  width: 74%;
  background-color: #f2f2f2;
  padding: 20px 15px 25px;
  border: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: var(--main-font);
    font-weight: 300;
    color: var(--light-black);
  }

  :focus {
    outline: none;
  }

  :focus::placeholder {
    color: transparent;
  }
`;

const ButtonMax = styled.button`
  display: flex;
  height: 30px;
  background: #4a4a4a;
  color: white;
  font-size: var(--text-small);
  text-align: center;
  width: 17%;
  padding: 2% 3% 2% 4%;
  margin: 0 3% 0 1%;
  font-weight: 300;
  border-radius: 2px;
`;

const CardAmount = props => {
  return (
    <RowContainer>
      <Left>Amount</Left>
      <Right>
        <Form>
          <Input placeholder="i.e 234,98.00 DAI"></Input>
          <ButtonMax>MAX</ButtonMax>
        </Form>
      </Right>
    </RowContainer>
  );
};

export default CardAmount;
