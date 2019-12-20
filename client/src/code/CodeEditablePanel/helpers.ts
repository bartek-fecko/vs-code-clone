export const checkSnippets = (textArea: HTMLTextAreaElement) => {
   switch (textArea.value.charAt(textArea.value.length - 1)) {
      case '{':
         textArea.value = textArea.value + '}';
         setFocusAfterOffset(textArea, 1, 'left');
         break;
      case '(':
         textArea.value = textArea.value + ')';
         setFocusAfterOffset(textArea, 1, 'left');
         break;
      case ';':
         textArea.value = textArea.value + '\n';
         break;
      case '\t':
         textArea.value = textArea.value + '   ';
         break;
      default:
         break;
   }
};

export const setFocusAfterOffset = (
   interactiveInput: HTMLTextAreaElement | HTMLInputElement,
   offset: number,
   direction: 'left' | 'right',
) => {
   offset = direction === 'left' ? -offset : offset;
   const lastPosition = interactiveInput.value.length;
   if ((interactiveInput as any).createTextRange) {
      const range = (interactiveInput as any).createTextRange();
      range.collapse(true);
      range.moveEnd('character', lastPosition + offset);
      range.moveStart('character', lastPosition + offset);
      range.select();
   } else if (interactiveInput.setSelectionRange) {
      interactiveInput.focus();
      interactiveInput.setSelectionRange(lastPosition + offset, lastPosition + offset);
   }
};
