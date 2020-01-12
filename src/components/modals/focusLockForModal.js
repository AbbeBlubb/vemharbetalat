// Move the focusLock to this separate file to have a cleaner/modularised/testable Modal component
// Is React needed?
// To move this function to separate file requires an additional input of the react node ref

export const focusLockForModal = (modalNodeRef, e) => {

  // Collect elements in NodeList. querySelectorAll returns a (DOM) NodeList, similar to an array. Can be destructured to an array: [...<code>]
  const focusableElementsNodeList =
    modalNodeRef.current
      // Select only the active/shown modal
      .querySelector('.modal--display-block')
      // Select the elements that are focusable
      .querySelectorAll('button, input');

  const firstFocusable = focusableElementsNodeList[0];
  const lastFocusable = focusableElementsNodeList[focusableElementsNodeList.length - 1];

  // When the event is fired on the first element, and the event contains shiftKey -> tabbing backwards in loop effect
  if (e.shiftKey && e.target === firstFocusable) {
    // Whitout e.preventDefault, the tab will make 2 jumps; first the focus on the first element on the NodeList, then the tabbing itself
    e.preventDefault();
    lastFocusable.focus();
  }

  // When the event is fired on the last element, and the element doesn't contain shiftKey -> tabbing forward in loop effect
  if (!e.shiftKey && e.target === lastFocusable) {
    // Whitout e.preventDefault, the tab will make 2 jumps; first the focus on the first element on the NodeList, then the tabbing itself
    e.preventDefault();
    firstFocusable.focus();
  }

  else {
    return;
  }
};
