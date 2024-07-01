import styled from 'styled-components';
import { useState } from 'react';

const StyledContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Counter({ animalName }) {
  // local counter state

  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubtract() {
    setCount(Math.max(0, count - 1));
  }

  return (
    <StyledContainer>
      <strong>{animalName}:</strong>
      <button type="button" onClick={handleSubtract}>
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{count}</span>
      <button type="button" onClick={handleAdd}>
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </StyledContainer>
  );
}
