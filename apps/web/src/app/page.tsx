import { User } from "@/types/user";

export default async function HomePage() {
  const response = await fetch(
    "https://learn-deployment-server.vercel.app/api/v1/users"
  );
  const users = await response.json();
  console.log(users);
  return (
    <section>
      {users.data.map((user: User) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        );
      })}
    </section>
  );
}
