import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';

const Profile = () => {
   const { user: authUser} = useContext(AuthContext)

  const [user, setUser] = useState({
    name: authUser?.displayName,
    email: authUser?.email,
    photo: authUser?.photoURL,
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(formData);
    setEditMode(false);
    // Optionally send update to backend here
    // // task for next time // //
    console.log('Updated profile:', formData);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>

      <div className="flex flex-col items-center mb-6">
        <img
          src={formData.photo}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow"
        />
        {!editMode ? (
          <p className="mt-2 text-lg font-semibold">{user.name}</p>
        ) : (
          <input
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            className="mt-2 border border-gray-300 p-1 rounded w-full"
            placeholder="Paste new image URL"
          />
        )}
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          {!editMode ? (
            <p className="mt-1">{user.name}</p>
          ) : (
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <p className="mt-1 text-gray-700">{user.email}</p>
        </div>

        <div className="text-center mt-6">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mr-2"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setFormData(user);
                  setEditMode(false);
                }}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
