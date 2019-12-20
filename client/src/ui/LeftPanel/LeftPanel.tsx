import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
   width: 150px;
   height: 100%;
   background: ${({ theme: { colors } }) => colors.bottomBackgrund};
`;

const LefPanel: React.FC = () => (
   <Wrapper></Wrapper>
);

export default LefPanel;
