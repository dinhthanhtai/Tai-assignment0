import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

export default function ButtonLoad({loading, loadImages}) {
    return (
        <LoadButton>
            <Button onClick={loadImages} type="primary">   {loading ? 'Loading...' : 'Load More'} </Button>
        </LoadButton>
    )
}

const LoadButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
`


