import React, { useState } from 'react';
import useDigitInput from 'react-digit-input';

import styled from 'styled-components';

function LoginText() {
    const [value, onChange] = useState('');
    const digits = useDigitInput({
        acceptedCharacters: /^[0-9]$/,
        length: 6,
        value,
        onChange,
    });    

    return (
        <Container>
            <Header>Log in to your account</Header>
            <SubHeader>Enter your 6-digit login code</SubHeader>
            <PasswordInput>
                <Input1 inputMode= "numeric" autoFocus {...digits[0] } />
                {//change the input1 to be something without a number in it 
                }
                <Input1 inputMode="numeric"  {...digits[1] } />
                <Input1 inputMode="numeric"  {...digits[2] } />
                <Input1 inputMode="numeric"  {...digits[3] } />
                <Input1 inputMode="numeric"  {...digits[4] } />
                <Input1 inputMode="numeric"  {...digits[5] } />
            </PasswordInput>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Header = styled.div`
    margin: 0 0 10px 0;
    font: 400 18px/21px Roboto;
    color: #000000;
`;

const SubHeader = styled.div`
    margin: 0 0 10px 0;
    font: 400 14px/16px Roboto;
    color: #000000;
`;

const PasswordInput = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;  
    font: bold 40px;
`;

const Input1 = styled.input`
    border: 1px solid black;
    margin: 0 5px 0 5px;
    height: 30px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export default LoginText;

// function LoginText() {
//     const [value, onChange] = useState('');
//     const digits = useDigitInput({
//         acceptedCharacters: /^[0-9]$/,
//         length: 6,
//         value,
//         onChange,
//     });

//     return (
//         <Container>
//             <Header>Log in to your account</Header>
//             <SubHeader>Enter your 6-digit login code</SubHeader>
//             <PasswordInput>
//                 <Input1 inputMode="decimal" autoFocus {...digits[0] } />
//                 <Input1 inputMode="decimal"  {...digits[1] } />
//                 <Input1 inputMode="decimal"  {...digits[2] } />
//                 <Input1 inputMode="decimal"  {...digits[3] } />
//                 <Input1 inputMode="decimal"  {...digits[4] } />
//                 <Input1 inputMode="decimal"  {...digits[5] } />
//                 {/* <Input1>1</Input1> */}
//                 {/* <Input1>1</Input1> */}
//                 {/* <Input1>1</Input1> */}
//                 {/* <Input1>1</Input1> */}
//                 {/* <Input1>1</Input1> */}
//             </PasswordInput>
//             <pre>
//                 <code>{value}</code>
//             </pre>
//         </Container>
//     );
// }
