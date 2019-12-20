import { appVariables, ServerEventKeys, UpdateSourceCodeTextMessage } from '#/config/appVariables';
import * as React from 'react';
import SourceCodeOutput from '../SourceCodeOutput/SourceCodeOutput';
import { checkSnippets } from './helpers';
import { SourceCodeContainer, TextArea, Wrapper } from './styled';

const CodeEditablePanel: React.FC = () => {
   const [text, setText] = React.useState<string>('');
   const [sourceCodeId, setSourceCodeId] = React.useState<string>('');
   const socket = appVariables.socket;

   const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textAfterSnipping = checkSnippets(e.target);
      setText(e.target.value);
      // socket.emit(
      //    ServerEventKeys.SetSourceCodeText,
      //    { text: e.target.value, id: sourceCodeId } as UpdateSourceCodeTextMessage,
      // );
      e.target.focus();
   };
   const onKeyDown = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onTextChange(e)
   };

   return (
      <Wrapper>
         <SourceCodeContainer>
            <TextArea
               value={text}
               // onKeyUp={onKeyDown}
               onChange={onTextChange}
            />
            <SourceCodeOutput></SourceCodeOutput>
         </SourceCodeContainer>
      </Wrapper>
   );
};

export default CodeEditablePanel;
