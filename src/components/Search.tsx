import axios from "axios";
import React from "react";

interface SearchProps {
  getUserData: (username: string) => void;
}

const Search = (props: SearchProps) => {
  const { getUserData } = props;
  const [username, setUsername] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUserData(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-light-input w-96 h-12 rounded-2xl px-4"
          type="text"
          placeholder="Search"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-light-input w-96 h-12 rounded-2xl px-4"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
