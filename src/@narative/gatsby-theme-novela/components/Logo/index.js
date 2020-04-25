import React from 'react'
import logo from './logo-hom.svg'

export default function Logo({ fill }) {
  return (
    <svg src={logo} viewBox="0 0 106 28" height="30px">
      <path d="M62.9 12h2.8v10...." />
      <path fill={fill} d="M25 14h-..." />
      <path d="M14 0C6.3..." fill="#639" />
    </svg>
  );
}