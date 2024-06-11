import React, { useEffect, useState } from "react";
import Detail from "./Detail";
import ItemList from "./ItemList";

export type User = {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
  join_date: string;
  description: string;
};

function App() {
  const [data, setData] = useState<User[] | undefined>(undefined);
  const [selUser, setSelUser] = useState<User>();

  const fetchData = async () => {
    const response = await fetch(
      "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users",
      {
        method: "GET",
      }
    );

    const rs = await response.json();
    setData([...rs.data.users]);
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  const handleSelUser = (user: User) => {
    setSelUser(user);
  };

  return (
    <>
      <ItemList users={data} onSelUser={handleSelUser} />
      {selUser && (
        <Detail
          key={selUser.id}
          user={selUser}
          onClose={() => setSelUser(undefined)}
        />
      )}
    </>
  );
}

export default App;
