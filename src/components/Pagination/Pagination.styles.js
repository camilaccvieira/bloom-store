import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const PageButton = styled.button`
  padding: 0.25rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid;
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${({ $active }) =>
    $active
      ? css`
          background-color: #2563eb;
          color: white;
          border-color: #2563eb;
        `
      : css`
          color: #2563eb;
          border-color: #93c5fd;
          &:hover {
            background-color: #e0f2fe;
          }
        `}
`;

export const ArrowButton = styled(PageButton)`
  ${({ disabled }) =>
    disabled
      ? css`
          color: #9ca3af; // gray-400
          border-color: #d1d5db; // gray-300
          cursor: not-allowed;
        `
      : css`
          color: #2563eb;
          border-color: #2563eb;
          &:hover {
            background-color: #e0f2fe;
          }
        `}
`;
