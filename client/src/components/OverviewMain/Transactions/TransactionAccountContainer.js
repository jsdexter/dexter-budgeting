import React, { useState } from "react";
import styled from "styled-components";
// import { useForm, useFormContext } from "react-hook-form";

const TransactionAccountContainer = (props) => {
  const { transaction } = props;
  const [isPaid] = useState(!!transaction.isPaid);

  //figure out what is going on with the accountNumber variable. 
  return (
    <InfoDiv>
      <div>
        {/* <div>Account #</div> */}
        <div>{props.title}</div>
      </div>
      <div>
        <CardInput isPaid={isPaid} defaultValue={props.defaultValue} {...props.register} />
      </div>
    </InfoDiv>
  );
};

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px 0px 20px;
  font: 700 20px/24px normal Roboto;
`;

const CardInput = styled.input`
  font: 700 20px/24px normal Roboto;
  text-align: center;
  border: none;
  background: ${({ isPaid }) => isPaid ? "rgba(0, 0, 0, .001)" : "#FFE3E3"};
`;

export default TransactionAccountContainer;