import React from 'react';

import styled from "styled-components";


export const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 300px;
    padding: 3rem 0 2rem;
    border-radius: 0.5rem;
    color: white;
`;

export const Content = styled.div`
    position: absolute;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;