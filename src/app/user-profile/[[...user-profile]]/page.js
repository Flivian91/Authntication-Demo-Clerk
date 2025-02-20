import { UserProfile } from "@clerk/nextjs";

function UserProfilePage() {
  return (
    <div className="flex items-center justify-center">
      <UserProfile path="/user-profile" />
    </div>
  );
}

export default UserProfilePage;
