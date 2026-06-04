import UserList from "./_components/UserList";

interface User {
  id: number;
  firstName: string;
}

interface UsersResponse {
  users: User[];
}

export default async function UsersPage() {
  const response = await fetch("https://dummyjson.com/users");
  const data: UsersResponse = await response.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Users</h1>
        <UserList users={data.users} />
      </div>
    </div>
  );
}
