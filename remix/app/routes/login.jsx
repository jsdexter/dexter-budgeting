import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";
import { createUserSession, getUserId } from "~/session.server";
import { verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

export async function loader({ request }) {
  const userId = await getUserId(request);
  if (userId) return redirect("/dashboard");
  return json({});
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/dashboard");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json({ errors: { email: "Email is invalid", password: null } }, { status: 400 });
  }
  if (typeof password !== "string" || password.length === 0) {
    return json({ errors: { email: null, password: "Password is required" } }, { status: 400 });
  }
  if (password.length < 8) {
    return json({ errors: { email: null, password: "Password is too short" } }, { status: 400 });
  }

  const user = await verifyLogin(email, password);
  if (!user) {
    return json({ errors: { email: "Invalid email or password", password: null } }, { status: 400 });
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on",
    redirectTo,
  });
}

export const meta = () => ({ title: "Login" });

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/dashboard";
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) emailRef.current?.focus();
    else if (actionData?.errors?.password) passwordRef.current?.focus();
  }, [actionData]);

  return (
    <div className="min-h-full flex flex-col justify-center bg-gray-950">
      <div className="mx-auto w-full max-w-sm px-8 py-12">
        <h1 className="text-2xl font-bold text-center text-white mb-2">Dexter Budget</h1>
        <p className="text-center text-gray-500 text-sm mb-8">Sign in to your account</p>

        <Form method="post" className="space-y-5">
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1.5">Email</label>
            <input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              required
              aria-invalid={actionData?.errors?.email ? true : undefined}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            {actionData?.errors?.email && (
              <p className="mt-1 text-xs text-red-400">{actionData.errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-400 mb-1.5">Password</label>
            <input
              ref={passwordRef}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              aria-invalid={actionData?.errors?.password ? true : undefined}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            {actionData?.errors?.password && (
              <p className="mt-1 text-xs text-red-400">{actionData.errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-400">
              <input name="remember" type="checkbox" className="rounded border-gray-600 bg-gray-800 text-indigo-500" />
              Remember me
            </label>
            <Link to={{ pathname: "/join", search: searchParams.toString() }} className="text-sm text-indigo-400 hover:text-indigo-300">
              Create account
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg font-medium transition"
          >
            Sign in
          </button>
        </Form>
      </div>
    </div>
  );
}
