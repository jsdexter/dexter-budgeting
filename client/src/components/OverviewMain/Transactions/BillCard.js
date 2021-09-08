import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addBill, deleteBill } from "../../../store/reducers/billSlice";


import {
  Amount,
  CardHeader,
  Date,
  Name,
  DetailsAccount,
  AccountName,
  InfoDiv,
  DetailsName,
  DetailsNumber,
  DetailsDate,
  ButtonDiv,
  Button
} from "./Transaction.elements";
import { ModalEditBill } from "./EditTransaction/ModalEditBill";

function BillCard(props) {
  // const { bill } = props;
  const { transaction } = props;

  const [isPaid, setIsPaid] = useState(true);
  const [details, setDetails] = useState(false);
  const [showEditBill, setShowEditBill] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    e.stopPropagation();
  }

  const closeModalBill = (e) => {
    handleButtonClick(e);
    setShowEditBill(false);
  };

  const openModalBill = (e) => {
    handleButtonClick(e);
    setShowEditBill(true);
  };

  const onClick = () => {
    setDetails(!details);
  };

  const deleteBill = () => {
    alert("Delete Button Clicked");

  }

  const toggleColor = () => {
    // setIsBill(!isBill)
    setIsPaid(!isPaid);
  };

  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  }

  if (details) {
    return (
      <>
        <ModalEditBill
          showModal={showEditBill}
          setShowModal={closeModalBill}>
        </ModalEditBill>
        {
          <DetailsBillDiv isPaid={isPaid} onClick={onClick}>
            <DetailsAccount>
              <tr>
                <AccountName>{transaction.payTo}</AccountName>
              </tr>
              <tr>
                <DetailsAddress>{transaction.address}</DetailsAddress>
                {/* <DetailsAddress>123 Main St.</DetailsAddress> */}
              </tr>
              <tr>
                <DetailsAddress>{transaction.cityStateZip}</DetailsAddress>
                {/* <DetailsAddress>Naperville, IL. 60540</DetailsAddress> */}
              </tr>
            </DetailsAccount>
            <InfoDiv>
              <td>Account #</td>
              <DetailsNumber>{transaction.account}</DetailsNumber>
              {/* <DetailsNumber>1283921327</DetailsNumber> */}
            </InfoDiv>
            <InfoDiv>
              <td>Amount:</td>
              <DetailsNumber>{transaction.amount}</DetailsNumber>
              {/* <DetailsNumber>$148</DetailsNumber> */}
            </InfoDiv>
            <InfoDiv>
              <DetailsName>Due Date:</DetailsName>
              <DetailsDate>{transaction.frequency}</DetailsDate>
              {/* <DetailsDate>Monthly on the 15th</DetailsDate> */}
            </InfoDiv>
            <ButtonDiv>
              <Button onClick={toggleColor}>Paid</Button>
              <Button onClick={openModalBill}>Edit</Button>
              <Button onClick={deleteBill}>Delete</Button>
            </ButtonDiv>
          </DetailsBillDiv>
        }
      </>
    );
  }

  // if (details) {
  //   return (
  //     <>
  //       <ModalEditBill
  //         showModal={showEditBill}
  //         setShowModal={closeModalBill}>
  //       </ModalEditBill>
  //       {
  //         <DetailsBillDiv isBill={isBill} onClick={onClick}>
  //           <DetailsAccount>
  //             <tr>
  //               <AccountName value={value} onChange={onChange}></AccountName>
  //               {/* <AccountName value={value} onChange={onChange}></AccountName> */}
  //               {/* <AccountName>City of Naperville Utilities</AccountName> */}
  //             </tr>
  //             <tr>
  //               <DetailsAddress value={value} onChange={onChange}></DetailsAddress>
  //               {/* <DetailsAddress>123 Main St.</DetailsAddress> */}
  //             </tr>
  //             <tr>
  //               <DetailsAddress value={value} onChange={onChange}></DetailsAddress>
  //               {/* <DetailsAddress>Naperville, IL. 60540</DetailsAddress> */}
  //             </tr>
  //           </DetailsAccount>
  //           <InfoDiv>
  //             <td>Account #</td>
  //             <DetailsNumber value={value} onChange={onChange}></DetailsNumber>
  //             {/* <DetailsNumber>1283921327</DetailsNumber> */}
  //           </InfoDiv>
  //           <InfoDiv>
  //             <td>Amount:</td>
  //             <DetailsNumber value={value} onChange={onChange}></DetailsNumber>
  //             {/* <DetailsNumber>$148</DetailsNumber> */}
  //           </InfoDiv>
  //           <InfoDiv>
  //             <DetailsName>Due Date:</DetailsName>
  //             <DetailsDate value={value} onChange={onChange}></DetailsDate>
  //             {/* <DetailsDate>Monthly on the 15th</DetailsDate> */}
  //           </InfoDiv>
  //           <ButtonDiv>
  //             <Button onClick={toggleColor}>Paid</Button>
  //             <Button onClick={openModalBill}>Edit</Button>
  //             <Button onClick={deleteBill}>Delete</Button>
  //           </ButtonDiv>
  //         </DetailsBillDiv>
  //       }
  //     </>
  //   )
  // }


  return (
    <BillDiv isPaid={isPaid} onClick={onClick}>
      {/* <pre>{JSON.stringify(isBillState, null, 2)}</pre> */}
      <CardHeader>
        <Amount>{transaction.amount}</Amount>
        <Date>{transaction.dueDate}</Date>
      </CardHeader>
      <Name>{transaction.payTo}</Name>
    </BillDiv>
  );
}

const BillDiv = styled.div`
  margin-top: 10px;
  height: 80px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  background: ${({ isPaid }) => isPaid ? "#FFE3E3" : "rgba(0, 0, 0, 0.3)"};
`;

const DetailsBillDiv = styled.table`
margin-top: 10px;
height: 250px;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
border-radius: 2px;
width: 100%;
background: ${({ isPaid }) => isPaid ? "#FFE3E3" : "rgba(0, 0, 0, 0.3)"};
`;

const DetailsAddress = styled.th`
font: 700 20px/24px normal Roboto;
margin-top: 10px;
`;

const DetailsIncomeDiv = styled.table`
  margin-top: 10px;
  height: 170px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  background: #F0FFF0;
  width: 100%;
  background: ${({ isPaid }) => isPaid ? "#F0FFF0" : "rgba(0, 0, 0, 0.3)"};
`;

const IncomeDiv = styled.div`
  margin-top: 10px;
  height: 80px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  background: ${({ isPaid }) => isPaid ? "#F0FFF0" : "rgba(0, 0, 0, 0.3)"}
`;

export default BillCard;