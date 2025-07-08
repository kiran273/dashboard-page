import React from 'react';
import Header from '../components/common/Header';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import SortButton from '../components/comments/SortButton';
import SearchInput from '../components/comments/SearchInput';
import CommentsTable from '../components/comments/CommentsTable';
import Pagination from '../components/comments/Pagination';
import { useComments } from '../hooks/useComments';

const CommentsPage = () => {
  const {
    comments,
    loading,
    error,
    state,
    handleSort,
    handleSearch,
    handlePageChange,
    handlePageSizeChange,
    refetch
  } = useComments();

  if (loading) return <LoadingSpinner message="Loading comments..." />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} />;

  const totalPages = Math.ceil(comments.length / state.pageSize);
  const startIndex = (state.currentPage - 1) * state.pageSize;
  const currentData = comments.slice(startIndex, startIndex + state.pageSize);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 space-y-4 lg:space-y-0">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <SortButton 
              field="postId" 
              sortField={state.sortField} 
              sortDirection={state.sortDirection} 
              onSort={handleSort}
            >
              Post ID
            </SortButton>
            <SortButton 
              field="name" 
              sortField={state.sortField} 
              sortDirection={state.sortDirection} 
              onSort={handleSort}
            >
              Name
            </SortButton>
            <SortButton 
              field="email" 
              sortField={state.sortField} 
              sortDirection={state.sortDirection} 
              onSort={handleSort}
            >
              Email
            </SortButton>
          </div>
          
          <div className="w-full lg:w-auto">
            <SearchInput value={state.searchTerm} onChange={handleSearch} />
          </div>
        </div>

        <div>
          <CommentsTable comments={currentData} />
          <Pagination
            currentPage={state.currentPage}
            totalPages={totalPages}
            pageSize={state.pageSize}
            totalItems={comments.length}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        </div>
      </main>
    </div>
  );
};

export default CommentsPage;