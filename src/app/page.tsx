import {
  getMongoDBUserIDOfLoggedInUser,
  handleNewUserRegistration,
} from "@/actions/user";
import { connectDB } from "@/config/dbConfig";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
connectDB();

export default async function Home() {
  await handleNewUserRegistration();
  await getMongoDBUserIDOfLoggedInUser();

  return (
    <div className="p-10">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
