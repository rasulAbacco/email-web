import AuthLayout from "../layouts/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import {Link} from "react-router-dom";

export default function LoginPage() {
  return (
    <AuthLayout>
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <form className="space-y-4">
        <InputField label="Email" type="email" required />
        <InputField label="Password" type="password" required />
        <Button type="submit" className="w-full">Login</Button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don’t have an account? <Link href="/signup" className="text-primary">Sign up</Link>
      </p>
    </AuthLayout>
  );
}
