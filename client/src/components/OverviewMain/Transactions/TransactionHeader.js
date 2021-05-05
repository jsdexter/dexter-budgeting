import React from 'react';

import { TransactionTop, IncomeHeader, BillsHeader } from './Transaction.elements';

function TransactionHeader() {
    return (
        <TransactionTop>
            <IncomeHeader>Income: $1045.18</IncomeHeader>
            <BillsHeader>Bills: $1045.18</BillsHeader>
    </TransactionTop>
    );
}

export default TransactionHeader;
