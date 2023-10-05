import AuthForm from "@/app/auth-form";
export default function Home() {
  return (
    <div className="row relative w-full">
        <div className="col-6">
      <h1 className="header">The Starting Page</h1>
            <p>Experience our Auth and Storage through a simple profile management example. Create a user
                profile and upload an avatar image. Fast, simple, secure.</p>
    </div>
        <div className="col-6 auth-widget">
            <AuthForm />
        </div>
    </div>
  );
}
