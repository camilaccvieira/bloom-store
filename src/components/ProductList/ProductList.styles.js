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
  grid-template-columns: repeat(3, 1fr); 
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); 
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); 
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 2rem;
`;
