"use client";

import { useState } from "react";

interface UserSummary {
  id: number;
  firstName: string;
}

interface UserDetail {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
}

export default function UserList({ users }: { users: UserSummary[] }) {
  const [selectedUser, setSelectedUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState(false);

  async function openModal(id: number) {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const user: UserDetail = await res.json();
    setSelectedUser(user);
    setLoading(false);
  }

  function closeModal() {
    setSelectedUser(null);
  }

  return (
    <>
      <ul className="space-y-3">
        {users.map((user) => (
          <li key={user.id}>
            <button
              onClick={() => openModal(user.id)}
              className="w-full text-left bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all text-blue-600 font-medium text-lg cursor-pointer"
            >
              {user.firstName}
            </button>
          </li>
        ))}
      </ul>

      {(loading || selectedUser) && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {loading ? (
              <p className="text-gray-500 text-center">Loading...</p>
            ) : selectedUser ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {selectedUser.firstName} {selectedUser.lastName}
                </h2>
                <p className="text-sm text-gray-400 mb-6">ID: {selectedUser.id}</p>
                <dl className="space-y-3 mb-8">
                  <div className="flex items-center gap-4">
                    <dt className="w-24 text-sm font-medium text-gray-500">Age</dt>
                    <dd className="text-gray-800">{selectedUser.age}</dd>
                  </div>
                  <div className="flex items-center gap-4">
                    <dt className="w-24 text-sm font-medium text-gray-500">Gender</dt>
                    <dd className="text-gray-800 capitalize">{selectedUser.gender}</dd>
                  </div>
                  <div className="flex items-center gap-4">
                    <dt className="w-24 text-sm font-medium text-gray-500">Email</dt>
                    <dd className="text-gray-800 break-all">{selectedUser.email}</dd>
                  </div>
                </dl>
                <button
                  onClick={closeModal}
                  className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
