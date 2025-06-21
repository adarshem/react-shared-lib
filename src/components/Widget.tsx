import React from 'react';

interface WidgetProps {
  title: string;
}

function Widget({ title }: WidgetProps) {
  return <div>{title}</div>;
}

export default Widget;