import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 3rem 1rem 0 1rem; // equivalente a pt-12 px-4
`;

export const ListViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridViewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr); // sm:grid-cols-2
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); // md:grid-cols-3
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 2rem;
`;
