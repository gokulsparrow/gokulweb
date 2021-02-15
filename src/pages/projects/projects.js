import React from 'react';

import '../projects/projects.style.css';

import styled from 'styled-components';


const Box = styled.div({
    background: 'palevioletred',
    height: '50px',
    width: '50px'
});

const projects = (props) => {
    return (
        <div className='projects'>
            <h2>projects</h2>
            <div>
                <Box>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                    <div>hello</div>
                </Box>
            </div>
        </div>
    )
}

export default projects;