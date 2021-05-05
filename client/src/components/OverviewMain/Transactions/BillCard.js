import React from 'react';

import { Amount, BillDiv, CardHeader, Date, Name } from './Transaction.elements';


function BillCard() {
    return (
        <BillDiv>
            <CardHeader>
                <Amount>- $40</Amount>
                <Date>January 13, 2021</Date>
            </CardHeader>
            <Name>City of Naperville Utilities</Name>
        </BillDiv>
    );
}

export default BillCard;
