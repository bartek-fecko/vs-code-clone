import * as React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   transform: translateY(-100%);
   height: 100%;
   z-index: 0;
`;

const SourceCodeOutput: React.FC = () => (
   <Wrapper></Wrapper>
);

export default SourceCodeOutput;
