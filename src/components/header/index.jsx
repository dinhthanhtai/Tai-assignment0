import React from 'react';
import { Affix } from 'antd';
import styled from 'styled-components';

export default function Header() {
    return (
        <Affix offsetTop={0} >
            <HeaderBar>
                List Images ^^!
            </HeaderBar>
        </Affix>
    );
}

const HeaderBar = styled.header`
    font-size: 1.6rem;
    font-family: 'Pacifico';
    text-align: center;
    padding: 10px 20px;
    color: #424242;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
    background: #fff;
    z-index: 10;
`
