import AuthLayout from "../layouts/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import {Link} from "react-router-dom";

export default function SignupPage() {
  return (
    <AuthLayout>
      <h1 className="text-xl font-semibold mb-4">Sign Up</h1>
      <form className="space-y-4">
        <InputField label="Name" required />
        <InputField label="Email" type="email" required />
        <InputField label="Password" type="password" required />
        <Button type="submit" className="w-full">Create Account</Button>
      </form>
      <p className="mt-4 text-center text-sm">
        Already have an account? <Link href="/login" className="text-primary">Log in</Link>
      </p>
    </AuthLayout>
  );
}
