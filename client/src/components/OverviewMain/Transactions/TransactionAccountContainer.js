import React, { useState } from "react";
import styled from "styled-components";
import { CardInput } from "../../../styles";

const TransactionAccountContainer = (props) => {
  const { transaction } = props;
  const [isPaid] = useState(!!transaction.isPaid);

  return (
    <InfoDiv>
      <div>
        <div>{props.title}</div>
      </div>
      <div>
        <CardInput
          isPaid={isPaid}
          defaultValue={props.defaultValue}
          {...props.register}
        />
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

export default TransactionAccountContainer;
