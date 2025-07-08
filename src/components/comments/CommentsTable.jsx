import React from 'react';

const CommentsTable = ({ comments }) => {
  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 w-24">Post ID</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Comment</th>
          </tr>
        </thead>
        <tbody>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <tr key={comment.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="px-4 py-3 text-sm text-gray-900">{comment.postId}</td>
                <td className="px-4 py-3 text-sm text-gray-900">{comment.name}</td>
                <td className="px-4 py-3 text-sm text-blue-600">{comment.email}</td>
                <td className="px-4 py-3 text-sm text-gray-600 max-w-md">
                  <div className="truncate" title={comment.body}>
                    {comment.body}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-4 py-8 text-center text-gray-500">
                No comments found matching your search criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CommentsTable;