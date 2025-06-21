import React from 'react';

interface WidgetProps {
  title: string;
  description: string;
}

function Widget({ title , description}: WidgetProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}

export default Widget;