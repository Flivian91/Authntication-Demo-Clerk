import { auth, currentUser } from "@clerk/nextjs/server";
import DashboardButton from "../components/Button";
async function DashboardPage() {
  const authObject = await auth();
  const userObject = await currentUser();

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <DashboardButton />
    </div>
  );
}

export default DashboardPage;
