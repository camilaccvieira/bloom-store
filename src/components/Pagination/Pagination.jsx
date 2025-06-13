'use client';
import {
  Container,
  PageButton,
  ArrowButton,
} from './Pagination.styles';

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Container>
      <ArrowButton
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {'<'}
      </ArrowButton>

      {Array.from({ length: totalPages }, (_, i) => (
        <PageButton key={i} onClick={() => goToPage(i + 1)} $active={currentPage === i + 1}>
          {i + 1}
        </PageButton>
      ))}

      <ArrowButton
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {'>'}
      </ArrowButton>
    </Container>
  );
};

export default Pagination;
