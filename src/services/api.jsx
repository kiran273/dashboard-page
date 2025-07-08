const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiService = {
  async fetchComments() {
    const response = await fetch(`${BASE_URL}/comments`);
    if (!response.ok) throw new Error('Failed to fetch comments');
    return response.json();
  },

  async fetchUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  async fetchUser(id = 1) {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  }
};