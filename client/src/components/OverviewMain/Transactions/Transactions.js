import React from 'react';

import { TransactionDiv, TransactionList } from './Transaction.elements';
import TransactionHeader from './TransactionHeader';
import IncomeCard from './IncomeCard';
import BillCard from './BillCard';

const Transactions = () => {
    return (
        <TransactionDiv>
            <TransactionHeader></TransactionHeader>
            <TransactionList>
                <IncomeCard></IncomeCard>
                <BillCard></BillCard>
                <IncomeCard></IncomeCard>
                <BillCard></BillCard>
                <BillCard></BillCard>
                <BillCard></BillCard>
                <BillCard></BillCard>
            </TransactionList>
        </TransactionDiv>
    );
}

export default Transactions;
