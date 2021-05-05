import styled from 'styled-components';

export const Amount = styled.div`
    padding-top: 10px;
    padding-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #0D9F15;
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

export const BillDiv = styled.div`
    margin-top: 10px;
    height: 80px;
    background: #FFE3E3;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
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

export const IncomeDiv = styled.div`
    margin-top: 10px;
    height: 80px;
    background: #F0FFF0;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 2px;
`;

export const TransactionTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const IncomeHeader = styled.div`
    margin: 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
`;

export const BillsHeader = styled.div`
    margin: 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
`;

export const TransactionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 55px;
`;

export const TransactionList = styled.div`
    width: 95%;  
    height: 100%;  
`;