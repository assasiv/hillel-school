import React, { useState, useEffect } from "react";

const UserData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Something went wrong, try again later");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleUserClick = (e) => {
      e.preventDefault();
      alert("Oops, you have no access to this info");
    };

    const userLinks = document.querySelectorAll(".user-info");
    userLinks.forEach((link) => {
      link.addEventListener("click", handleUserClick);
    });

    return () => {
      userLinks.forEach((link) => {
        link.removeEventListener("click", handleUserClick);
      });
    };
  }, [data]);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>User Names</h1>
      <ul>
        {data &&
          data.map((user) => (
            <li key={user.id}>
              <a href="#" className="user-info">
                {user.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserData;
