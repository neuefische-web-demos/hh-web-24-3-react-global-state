import styled from 'styled-components';
import Link from 'next/link';

const StyledTitle = styled.h1`
  font-size: 1rem;
  margin: 0;
`;

export default function Header() {
  const countSum = '⚠️';
  return (
    <StyledTitle>
      <Link href="/">
        CounterApp
        <span role="img" aria-label="trademark">
          ™
        </span>
        — currently counting <strong>{countSum}</strong> things.
      </Link>
    </StyledTitle>
  );
}
