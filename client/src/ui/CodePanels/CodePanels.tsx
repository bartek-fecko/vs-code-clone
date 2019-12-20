import CodeTabs from '#/code/CodeTabs/CodeTabs';
import Preview from '#/code/Preview/Preview';
import * as React from 'react';
import styled from 'styled-components';
import LefPanel from '../LeftPanel/LeftPanel';

const Wrapper = styled.div`
   width: 100%;
   flex-grow: 1;
   display: flex;
   overflow: hidden;
   & > :nth-child(n + 2) {
      flex-grow: 1;
   }
`;

const CodePanels: React.FC = () => (
   <Wrapper>
      <LefPanel />
      <CodeTabs />
      <Preview />
   </Wrapper>
);

export default CodePanels;
