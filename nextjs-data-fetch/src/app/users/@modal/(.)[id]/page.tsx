import Link from "next/link";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
}

export default async function UserModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const user: User = await response.json();

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-sm text-gray-400 mb-6">ID: {user.id}</p>
        <dl className="space-y-3 mb-8">
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
            <dd className="text-gray-800 break-all">{user.email}</dd>
          </div>
        </dl>
        <Link
          href="/users"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Close
        </Link>
      </div>
    </div>
  );
}
