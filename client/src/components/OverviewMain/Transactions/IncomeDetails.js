import styled from "styled-components";

function IncomeDetails() {

  return (
    <Container>
      <AccountInfo>
        <CardName>Jason Pay</CardName>
      </AccountInfo>
      <AccountDiv>
        <Name>Amount:</Name>
        <Number>$148</Number>
      </AccountDiv>
      <AccountDiv>
        <Name>Pay Date:</Name>
        <DueDate>Monthly on the 15th and 30th</DueDate>
      </AccountDiv>
    </Container>
  );
}

const Container = styled.table`
  margin-top: 10px;
  height: 170px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  background: #F0FFF0;
  width: 100%;
`;

const AccountInfo = styled.thead`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CardName = styled.td`
  margin-top: 20px;
  font: 700 25px/28px normal Roboto;
`;

const AccountDiv = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 20px 0px 20px;
  font: 700 20px/24px normal Roboto;
`;

const Name = styled.td``;

const Number = styled.td``;

const DueDate = styled.td``;

export default IncomeDetails;