import '#/config/globals.sass';
import { WithTheme } from '#/config/Theme';
import CodePanels from '#/ui/CodePanels/CodePanels';
import ToolBox from '#/ui/Toolbox/Toolbox';
import * as React from 'react';

import styled from 'styled-components';

const Platform = styled.div`
   display: flex;
   flex-direction: column;
   height: 100vh;
`;

const Root: React.FC = () => (
   <WithTheme>
      <Platform>
         <ToolBox />
         <CodePanels />
      </Platform>
   </WithTheme>
);

export default Root;
