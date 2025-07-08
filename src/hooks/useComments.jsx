import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { useLocalStorage } from './useLocalStorage';

export const useComments = () => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [state, setState] = useLocalStorage('commentsScreenState', {
    searchTerm: '',
    sortField: '',
    sortDirection: '',
    currentPage: 1,
    pageSize: 10
  });

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [comments, state.searchTerm, state.sortField, state.sortDirection]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const data = await apiService.fetchComments();
      setComments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...comments];

    if (state.searchTerm) {
      filtered = filtered.filter(comment =>
        comment.name.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        comment.email.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        comment.body.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    }

    if (state.sortField && state.sortDirection) {
      filtered.sort((a, b) => {
        let aValue, bValue;
        
        switch (state.sortField) {
          case 'postId':
            aValue = a.postId;
            bValue = b.postId;
            break;
          case 'name':
            aValue = a.name.toLowerCase();
            bValue = b.name.toLowerCase();
            break;
          case 'email':
            aValue = a.email.toLowerCase();
            bValue = b.email.toLowerCase();
            break;
          default:
            return 0;
        }

        if (state.sortDirection === 'asc') {
          return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        } else {
          return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
        }
      });
    }

    setFilteredComments(filtered);
  };

  const updateState = (updates) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const handleSort = (field) => {
    if (state.sortField === field) {
      if (state.sortDirection === 'asc') {
        updateState({ sortDirection: 'desc' });
      } else if (state.sortDirection === 'desc') {
        updateState({ sortField: '', sortDirection: '' });
      } else {
        updateState({ sortDirection: 'asc' });
      }
    } else {
      updateState({ sortField: field, sortDirection: 'asc', currentPage: 1 });
    }
  };

  const handleSearch = (searchTerm) => {
    updateState({ searchTerm, currentPage: 1 });
  };

  const handlePageChange = (currentPage) => {
    updateState({ currentPage });
  };

  const handlePageSizeChange = (pageSize) => {
    updateState({ pageSize, currentPage: 1 });
  };

  return {
    comments: filteredComments,
    loading,
    error,
    state,
    handleSort,
    handleSearch,
    handlePageChange,
    handlePageSizeChange,
    refetch: fetchComments
  };
};