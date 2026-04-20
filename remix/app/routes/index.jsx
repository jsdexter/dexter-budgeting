import { redirect } from "@remix-run/node";
import { getUserId } from "~/session.server";

export async function loader({ request }) {
  const userId = await getUserId(request);
  return redirect(userId ? "/dashboard" : "/login");
}
