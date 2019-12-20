import styled from 'styled-components';

export const containerPaddingTop = `${8 * 4}px`;

export const Wrapper = styled.div`
   width: 100%;
   height: calc(100% - ${containerPaddingTop});
   border: 1px solid ${({ theme: { colors } }) => colors.border};
   border-top: transparent;
   background: ${({ theme: { colors } }) => colors.topBackground};
`;

export const TextArea = styled.textarea`
   position: relative;
   z-index: 1;
   width: 100%;
   height: 100%;
   background: ${({ theme: { colors } }) => colors.topBackground};
   resize: none;
   outline: none;
   border: none;
   padding: 0;
   color: ${({ theme: { codeTheme } }) => codeTheme.fontDefaultColor};
   font-size: ${({ theme: { codeTheme } }) => codeTheme.fontSize};
   &::-webkit-scrollbar {
      width: 0.6em;
   }
   &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
   }
   &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
   }
`;

export const SourceCodeContainer = styled.div`
   padding: ${containerPaddingTop}  ${8 * 3}px 0 ${8 * 3}px;
   height: calc(100% - ${containerPaddingTop});
`;
