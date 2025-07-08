import React from 'react';

const ProfileForm = ({ user }) => {
  const fields = [
    { label: 'User ID', value: '12345687', key: 'userId' },
    { label: 'Name', value: 'Ervin Howell', key: 'name' },
    { label: 'Email ID', value: 'ervinhowell@gmail.com', key: 'email' },
    { label: 'Address', value: 'voluptate lusto quis nobis reprehenderit...', key: 'address' },
    { label: 'Phone', value: '96068 12345', key: 'phone', span: 'col-span-1' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
      {/* Left Column */}
      <div className="space-y-10">
        {fields.slice(0, 3).map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-600 mb-3">
              {field.label}
            </label>
            <input
              type={field.key === 'email' ? 'email' : field.key === 'phone' ? 'tel' : 'text'}
              value={field.value}
              readOnly
              className="w-full px-0 py-2 text-gray-900 bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 outline-none transition-colors text-sm"
            />
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="space-y-10">
        {fields.slice(3).map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium text-gray-600 mb-3">
              {field.label}
            </label>
            <input
              type={field.key === 'email' ? 'email' : field.key === 'phone' ? 'tel' : 'text'}
              value={field.value}
              readOnly
              className="w-full px-0 py-2 text-gray-900 bg-transparent border-0 border-b border-gray-300 focus:border-gray-500 focus:ring-0 outline-none transition-colors text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileForm;