import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const TransactionInformation = (props) => {
  const { transaction } = props;
  const [isPaid, setIsPaid] = useState(!!transaction.isPaid);
  const { register, handleSubmit } = useForm();

  return (
    <DetailsAccount isPaid={isPaid}>
      <div>
        <CardInput isPaid={isPaid} defaultValue={transaction.name} {...register("name")} />
      </div>
      <div>
        <CardInput isPaid={isPaid} defaultValue={transaction.address} {...register("address")} />
      </div>
      <TransactionCity isPaid={isPaid}>
        <CityStateZip isPaid={isPaid} defaultValue={transaction.city} {...register("city")} />
        <CityStateZip isPaid={isPaid} defaultValue={transaction.state} {...register("state")} />
        <CityStateZip isPaid={isPaid} defaultValue={transaction.zip} {...register("zip")} />
      </TransactionCity>
    </DetailsAccount>
  );
};

const DetailsAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CardInput = styled.input`
  font: 700 20px/24px normal Roboto;
  text-align: center;
  border: none;
  background: ${({ isPaid }) => isPaid ? "rgba(0, 0, 0, .001)" : "#FFE3E3"};
`;

const TransactionCity = styled.div`
  text-align: center;
`;

const CityStateZip = styled.input`
  font: 700 20px/24px normal Roboto;
  text-align: center;
  border: none;
  background: #FFE3E3;
  width: 15%;
  background: ${({ isPaid }) => isPaid ? "rgba(0, 0, 0, .001)" : "#FFE3E3"};
`;

export default TransactionInformation;
