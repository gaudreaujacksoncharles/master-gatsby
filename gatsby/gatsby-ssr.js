import React from 'react';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}