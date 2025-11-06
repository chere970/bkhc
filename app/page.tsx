import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "./features/shared/components/ui/button";
import Link from "next/link";
import { signOutAction } from "./actions/auth";

const home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl font-bold">cosden Solution</h1>
        <div className="flex gap-4 mt-8">
          <Button asChild size="lg">
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">cosden Solution</h1>
      <div className="flex gap-4 mt-8">
        <p className="text-lg mb-4 ">User Id:{session.user.id}</p>
        <form action={signOutAction}>
          <Button type="submit" size="lg">
            logout
          </Button>
        </form>
      </div>
    </div>
  );
};
export default home;
