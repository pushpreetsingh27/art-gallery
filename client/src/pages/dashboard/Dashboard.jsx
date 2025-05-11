import React, { useState } from "react";
import "./dashboard.css";  // Import the external CSS file
import Navbar from "../../components/Navbar";
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      imageUrl: "./art-1.jpg",
      datePosted: "2025-05-11",
    },
    {
      id: 2,
      imageUrl: "./art-2.jpeg",
      datePosted: "2025-05-10",
    },
  ]);


  const navigate = useNavigate()

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="header">
        <img
          src="./profile.jpg"
          alt="User Profile"
          className="rounded-full"
        />
        <div>
          <h1>Welcome, Ritik</h1>
          <p>Manage your artwork gallery</p>
          <button className = "post-art-btn" onClick = {() => navigate("/post-art")} >Post Your Art</button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container">
        <h2 className="text-3xl font-semibold mb-6">Your Artwork</h2>

        {/* Table Section */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Date Posted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>
                    <img
                      src={post.imageUrl}
                      alt="Art"
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td>{post.datePosted}</td>
                  <td className="actions">
                    <button
                      onClick={() => deletePost(post.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
