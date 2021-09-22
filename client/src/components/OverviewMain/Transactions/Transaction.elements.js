import styled from "styled-components";

export const Amount = styled.div`
  padding-top: 10px;
  padding-left: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #0d9f15;
`;

export const Date = styled.div`
  padding-top: 10px;
  padding-right: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  color: #404040;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 20px;
  padding-top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  text-align: right;
  color: #404040;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

// export const DetailsAccount = styled.tr`
// display: flex;
// flex-direction: column;
// justify-content: flex-start;
// align-items: center;
// `;

export const DetailsAccount = styled.thead`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

export const AccountName = styled.th`
margin-top: 20px;
font: 700 25px/28px normal Roboto;
`;

export const InfoDiv = styled.tbody`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 10px 20px 0px 20px;
font: 700 20px/24px normal Roboto;
`;

export const DetailsName = styled.td``;

export const DetailsNumber = styled.td``;

export const DetailsDate = styled.td``;

export const ButtonDiv = styled.tbody`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 15px 0 15px 0;
`;

export const Button = styled.td`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  height: 30px;
  background: #3f51b5;
  font: 700 16px/16px Roboto;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  color: #ffffff;
  text-decoration: none;
  padding: 2px 30px 2px 30px;
`;