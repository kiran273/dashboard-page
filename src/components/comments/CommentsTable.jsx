import React from 'react';

const CommentsTable = ({ comments }) => {
  return (
    <div className="bg-white rounded border border-gray-200 overflow-hidden">
      {/* Mobile Card View */}
      <div className="block sm:hidden">
        {comments.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {comments.map((comment, index) => (
              <div key={comment.id} className="p-4 space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-medium text-gray-500">Post #{comment.postId}</span>
                  <span className="text-xs text-gray-400">#{index + 1}</span>
                </div>
                <div className="font-medium text-gray-900 text-sm">{comment.name}</div>
                <div className="text-blue-600 text-sm">{comment.email}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{comment.body}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            No comments found matching your search criteria.
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700 w-16 sm:w-24">Post ID</th>
              <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Name</th>
              <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Email</th>
              <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-700">Comment</th>
            </tr>
          </thead>
          <tbody>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <tr key={comment.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-900">{comment.postId}</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-900">{comment.name}</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-blue-600">{comment.email}</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-600 max-w-xs lg:max-w-md">
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
    </div>
  );
};

export default CommentsTable;