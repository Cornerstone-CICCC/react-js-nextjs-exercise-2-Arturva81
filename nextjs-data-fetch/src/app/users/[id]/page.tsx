import Link from "next/link";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
}

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const user: User = await response.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-lg mx-auto">
        <Link
          href="/users"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium"
        >
          ← Back to Users
        </Link>
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            {user.firstName} {user.lastName}
          </h1>
          <dl className="space-y-4">
            <div className="flex items-center gap-4">
              <dt className="w-24 text-sm font-medium text-gray-500">Age</dt>
              <dd className="text-gray-800">{user.age}</dd>
            </div>
            <div className="flex items-center gap-4">
              <dt className="w-24 text-sm font-medium text-gray-500">Gender</dt>
              <dd className="text-gray-800 capitalize">{user.gender}</dd>
            </div>
            <div className="flex items-center gap-4">
              <dt className="w-24 text-sm font-medium text-gray-500">Email</dt>
              <dd className="text-gray-800">{user.email}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
