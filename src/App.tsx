import UserDisplay from "./components/UserDisplay";
import type { User } from "./types";

function App() {
  const users: User[] = [
    {
      name: "Ryan Yogan",
      messages: [
        {
          body: "Let's chat in nodes, like nerds.",
        },
        {
          body: "Okay this is a really odd way...",
        },
      ],
    },
  ];

  return (
    <div className="bg-zinc-800 flex justify-center items-center h-screen flex-col w-full">
      {users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
