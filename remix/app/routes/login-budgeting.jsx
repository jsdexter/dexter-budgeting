import { 
  Form, 
  LiveReload, 
  useActionData
} from "@remix-run/react";
import { json, redirect } from "@remix-run/server-runtime";

export const action = async ({request}) => {
  const formData = await request.formData();
  const password = formData.get("password");
  if (password === "111111") {
    return redirect("/transactions");
  } else {
    return {
      validation: false,
    }
  };
};

const LoginContainer = () => {
  const actionData = useActionData();

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="text-4xl">Log in to your account</div>
      <div>Enter your 6-digit login code</div>
      {actionData && actionData.validation === false ? <div>Wrong Password, Please Try Again</div> : null}
      <Form method="post" >
        <div className="flex flex-col w-100 justify-center items-center content-center font-bold">
          <input type="password" name="password" id="password" inputMode="numeric" autoFocus
            className="mt-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
            dark:focus:border-blue-500" 
          />
          <button type="submit" className="py-2.5 px-5 mr-2 mb-2 mt-6 text-sm font-medium text-gray-900 focus:outline-none bg-white 
            rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 
            dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Submit
          </button>
        </div>
      </Form>
      {/* <LiveReload /> */}
    </div>
  );
};

export default LoginContainer;

{/* <input className="border-2 border-black border-solid my-0 mx-5 h-7 w-5 flex justify-center 
items-center text-center" inputMode="numeric" autoFocus {...digits[0]} />
<input className="border-2 border-black border-solid my-0 mx-5 h-7 w-5 flex justify-center 
items-center text-center" inputMode="numeric" {...digits[1]} />
<input className="border-2 border-black border-solid my-0 mx-5 h-7 w-5 flex justify-center 
items-center text-center" inputMode="numeric" {...digits[2]} />
<input className="border-2 border-black border-solid my-0 mx-5 h-7 w-5 flex justify-center 
items-center text-center" inputMode="numeric" {...digits[3]} />
<input className="border-2 border-black border-solid my-0 mx-5 h-7 w-5 flex justify-center 
items-center text-center" inputMode="numeric" {...digits[4]} />
<input className="border-2 border-black border-solid my-0 mx-5 h-7 w-5 flex justify-center 
items-center text-center" inputMode="numeric" {...digits[5]} /> */}