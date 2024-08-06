// import React, { useState } from "react";
// import axios from "axios";
// import "./SearchGithub.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";

// const GithubSearch = () => {
//   // Declare state variables inside the functional component
//   const [username, setUsername] = useState("");
//   const [profile, setProfile] = useState(null);
//   const [error, setError] = useState(null);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!username.trim()) {
//       setError("Please enter a username");
//       return;
//     }
//     try {
//       const response = await axios.get(
//         `https://api.github.com/users/${username}`
//       );
//       setProfile(response.data);
//       setError(null);
//     } catch (err) {
//       setError("User not found");
//       setProfile(null);
//     }
//   };

//   return (
//     <>
//       <div className="main-container">
//         <h1 className="main-heading">Search For A GitHub Profile</h1>
//         <form onSubmit={handleSubmit} className="search-form">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Enter a GitHub username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <button type="submit" className="search-btn">
//             Search
//           </button>
//         </form>

//         {error && <p className="error-message">{error}</p>}
//         {profile && (
//           <div className="profile-container">
//             <div className="profile-content">
//               <div className="profile-img">
//                 <img
//                   src={profile.avatar_url || "https://via.placeholder.com/150"}
//                   alt={profile.name || "GitHub Avatar"}
//                   className="profile-avatar"
//                 />
//               </div>
//               <div className="profile-details">
//                 <div className="profile-des">
//                   <h2 className="profile-name">
//                     {profile.name || "No name available"}
//                   </h2>
//                   <p class="profile-created">
//                     Join : {new Date(profile.created_at).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <a
//                   href={profile.html_url}
//                   target="_blank"
//                   rel="norefer"
//                   className="profile-username"
//                 >
//                   @{profile.login}
//                 </a>

//                 <p className="profile-bio">
//                   <strong>Bio</strong> : {profile.bio || "No bio available"}
//                 </p>
//                 <div className="profile-stats">
//                   <a className="profile-reps">
//                     Repositories <br />
//                     <strong className="stats">{profile.public_repos}</strong>
//                   </a>
//                   <a className="profile-followers">
//                     Followers <br />
//                     <strong className="stats">{profile.followers}</strong>
//                   </a>
//                   <a className="profile-following">
//                     Following <br />
//                     <strong className="stats">{profile.following}</strong>
//                   </a>
//                 </div>
//                 <div className="profile-info">
//                   <p className="profile-location">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="location-icon"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
//                       />
//                     </svg>
//                     {profile.location}
//                   </p>
//                   <p className="profile-location">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="location-icon"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
//                       />
//                     </svg>
//                     {profile.company}
//                   </p>
//                 </div>
//                 <div className="profile-link">
//                 <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
//                   <a href={`https://twitter.com/${profile.twitter_name}`}></a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default GithubSearch;

import React, { useState } from "react";
import axios from "axios";
import "./SearchGithub.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GithubSearch = () => {
  // Declare state variables inside the functional component
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setProfile(response.data);
      setError(null);
    } catch (err) {
      setError("User not found");
      setProfile(null);
    }
  };

  return (
    <>
      <div className="main-container">
        <h1 className="main-heading">Search For A GitHub Profile</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Enter a GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {profile && (
          <div className="profile-container">
            <div className="profile-content">
              <div className="profile-img">
                <img
                  src={profile.avatar_url || "https://via.placeholder.com/150"}
                  alt={profile.name || "GitHub Avatar"}
                  className="profile-avatar"
                />
              </div>
              <div className="profile-details">
                <div className="profile-des">
                  <h2 className="profile-name">
                    {profile.name || "No name available"}
                  </h2>
                  <p className="profile-created">
                    Join : {new Date(profile.created_at).toLocaleDateString()}
                  </p>
                </div>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-username"
                >
                  @{profile.login}
                </a>

                <p className="profile-bio">
                  <strong>Bio</strong> : {profile.bio || "No bio available"}
                </p>
                <div className="profile-stats">
                  <a className="profile-reps">
                    Repositories <br />
                    <strong className="stats">{profile.public_repos}</strong>
                  </a>
                  <a className="profile-followers">
                    Followers <br />
                    <strong className="stats">{profile.followers}</strong>
                  </a>
                  <a className="profile-following">
                    Following <br />
                    <strong className="stats">{profile.following}</strong>
                  </a>
                </div>
                <div className="profile-info">
                  <p className="profile-location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="location-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    {profile.location}
                  </p>
                  <p className="profile-location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="location-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                      />
                    </svg>
                    {profile.company}
                  </p>
                </div>
                <div className="profile-link">
                  <a
                    href={
                      profile.twitter_username
                        ? `https://twitter.com/${profile.twitter_username}`
                        : "#"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter-link"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                    Twitter Profile
                  </a>
                  <a href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="profile-url">
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GithubSearch;
