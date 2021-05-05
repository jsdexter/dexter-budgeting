import React from 'react';

import { IncomeDiv, Amount, Date, Name, CardHeader } from './Transaction.elements';

function IncomeCard() {
    return (
        <IncomeDiv>
            <CardHeader>
                <Amount>+ $1,110</Amount>
                <Date>January 21, 2921</Date>
            </CardHeader>
            <Name>Jason Pay</Name>
        </IncomeDiv>
    );
}

export default IncomeCard;
