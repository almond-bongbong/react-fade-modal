import React from 'react';

interface Props {
  name?: string;
}

function Modal({ name = 'james' }: Props): JSX.Element {
  return <div>i'm modal {name}</div>;
}

export default Modal;
