import styled from 'styled-components';
import { useState } from 'react';

export default function Counter({ animal, onAdd, onSubtract }) {
  // local counter state
  //const [count, setCount] = useState(0);

  const { id, name, count } = animal;

  return (
    <StyledContainer>
      <strong>{name}:</strong>
      <button type="button" onClick={() => onSubtract(id)}>
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => onAdd(id)}>
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </StyledContainer>
  );
}

const StyledContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
