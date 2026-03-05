// import Image from 'next/image';
// import Link from 'next/link';
// import { Input } from '@/src/app/components/ui/Input';
// import { Button } from '@/src/app/components/ui/Button';

// export default function SignInPage() {
//   return (
//     // Removed outer padding on mobile (px-0), added back for sm+ (sm:p-4)
//     <div className="min-h-screen flex items-center justify-center sm:p-4">
//       {/* Container: Stacks image on top on mobile, side-by-side on md+ */}
//       <div className="flex flex-col-reverse md:flex-row w-full max-w-[1000px] bg-card overflow-hidden min-h-screen sm:min-h-[550px]">
        
//         {/* Left Side - Form Area */}
//         <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 flex flex-col justify-center relative">
//           <h1 className="text-2xl md:text-[32px] font-bold text-foreground mb-8">Sign In</h1>
          
//           <form className="w-full max-w-[380px]">
//             <Input 
//               id="email"
//               type="email" 
//               label="Email Address" 
//               placeholder="admin@example.com" 
//               required
//             />
            
//             <Input 
//               id="password"
//               type="password" 
//               label="Your Password" 
//               placeholder="Enter your password" 
//               required
//             />
            
//             <div className="mt-8">
//               <Button type="submit" fullWidth>
//                 Sign In
//               </Button>
//             </div>
//           </form>
          
//           {/* Footer Links */}
//           <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm w-full max-w-[380px] gap-4 sm:gap-0">
//             <Link href="/forgot-password" className="text-gray-400 hover:text-gray-600 transition-colors">
//               Forget Password?
//             </Link>
//             <span className="text-gray-400">
//               Don&apos;t have an account?{' '}
//               <Link href="/sign-up" className="text-primary font-semibold hover:underline">
//                 Sign Up
//               </Link>
//             </span>
//           </div>
//         </div>

//         {/* Right Side - Image Area */}
//         {/* Removed 'hidden', given responsive heights, stacked at top on mobile */}
//         <div className="w-full h-[250px] sm:h-[300px] md:h-auto md:w-1/2 relative bg-primary flex-shrink-0">
//           <Image
//             src="/shapes.png" 
//             alt="Welcome Background"
//             fill
//             className="object-cover"
//             priority
//           />
          
//           {/* Text Overlay - Responsive positioning and text sizes */}
//           <div className="absolute bottom-6 left-6 md:bottom-16 md:left-12 text-white z-10">
//             <h2 className="text-3xl md:text-[40px] font-bold leading-[1.1] tracking-tight">
//               Hey<br />
//               Welcome<br />
//               Back
//             </h2>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }














"use client"; // Required in Next.js to use React state and the router

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/src/app/components/ui/Input';
import { Button } from '@/src/app/components/ui/Button';





export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // MOCK LOGIN LOGIC: 
    // In a real app, you would await an API call here.
    setTimeout(() => {
      if (email.toLowerCase().includes('admin')) {
        // If email contains 'admin', redirect to Admin portal
        router.push('/admin/dashboard');
      } else {
        // Otherwise, redirect to Fleet portal
        router.push('/fleet/dashboard');
      }
      setIsLoading(false);
    }, 800); // 800ms delay to simulate network request
  };

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-4">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-250 bg-card overflow-hidden min-h-screen sm:min-h-137.5">
        
        {/* Left Side - Form Area */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 flex flex-col justify-center relative">
          <h1 className="text-2xl md:text-[32px] font-bold text-foreground mb-8">Sign In</h1>
          
          <form className="w-full max-w-95" onSubmit={handleSignIn}>
            <Input 
              id="email"
              type="email" 
              label="Email Address" 
              placeholder="admin@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <Input 
              id="password"
              type="password" 
              label="Your Password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <div className="mt-8">
              <Button type="submit" fullWidth disabled={isLoading}>
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </div>
          </form>
          
          {/* Footer Links */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm w-full max-w-95 gap-4 sm:gap-0">
            <Link href="/forgot-password" className="text-gray-400 hover:text-gray-600 transition-colors">
              Forget Password?
            </Link>
            <span className="text-gray-400">
              Don&apos;t have an account?{' '}
              <Link href="/sign-up" className="text-primary font-semibold hover:underline">
                Sign Up
              </Link>
            </span>
          </div>
        </div>

        {/* Right Side - Image Area */}
        <div className="w-full h-62.5 sm:h-75 md:h-auto md:w-1/2 relative bg-primary shrink-0">
          <Image
            src="/login.png" 
            alt="Welcome Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-6 left-6 md:bottom-16 md:left-12 text-white z-10">
            <h2 className="text-2xl md:text-[35px] font-medium leading-[1.1] tracking-tight">
              Hey<br />
              Welcome<br />
              Back
            </h2>
          </div>
        </div>
        
      </div>
    </div>
  );
}