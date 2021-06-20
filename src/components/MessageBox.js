import React from 'react';
const MessageBox = (props) => {
  return (
    <div className={`danger alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  );
};
export default MessageBox;