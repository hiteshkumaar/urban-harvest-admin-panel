import { LoginForm } from '../components/auth/LoginForm';

export const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200/40 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-200/40 dark:bg-green-900/20 rounded-full blur-3xl" />
      </div>
      
      <div className="z-10 w-full flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
};
