import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/common/Header';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileForm from '../components/profile/ProfileForm';
import { useUser } from '../hooks/useUser';

const ProfilePage = () => {
  const { user, loading, error, refetch } = useUser();
  const navigate = useNavigate();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} title="Error loading profile" />;
  if (!user) return <ErrorMessage error="No user data available" onRetry={refetch} />;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header showProfile={false} />

      <main className="max-w-5xl mx-auto px-6 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Welcome, Ervin Howell</span>
        </button>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <ProfileHeader />
          <ProfileForm user={user} />
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;