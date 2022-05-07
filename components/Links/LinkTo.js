import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Span = styled.span`
  a {
    font-size: 13px;
    padding: 0 1em;
    color: #70757a;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const LinkTo = ({ label, to, ...props }) => {
  return (
    <Span>
      <Link href={to}>
        <a {...props}>{label}</a>
      </Link>
    </Span>
  );
};

export default LinkTo;
