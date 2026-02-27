import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/src/app/components/ui/Input';
import { Button } from '@/src/app/components/ui/Button';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center sm:p-4">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-250 bg-card overflow-hidden min-h-screen sm:min-h-137.5">
        
        {/* Left Side - Form Area */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 flex flex-col justify-center relative">
          <h1 className="text-2xl md:text-[32px] font-bold text-foreground mb-8">Sign Up</h1>
          
          <form className="w-full max-w-95">
            <Input 
              id="name"
              type="text" 
              label="Company / Full Name" 
              placeholder="City Logistics Ltd" 
              required
            />

            <Input 
              id="email"
              type="email" 
              label="Email Address" 
              placeholder="admin@example.com" 
              required
            />
            
            <Input 
              id="password"
              type="password" 
              label="Create Password" 
              placeholder="Enter a strong password" 
              required
            />
            
            <div className="mt-8">
              <Button type="submit" fullWidth>
                Sign Up
              </Button>
            </div>
          </form>
          
          {/* Footer Links */}
          <div className="mt-8 flex items-center text-sm w-full max-w-95">
            <span className="text-gray-400">
              Already have an account?{' '}
              <Link href="/sign-in" className="text-primary font-semibold hover:underline">
                Sign In
              </Link>
            </span>
          </div>
        </div>

        {/* Right Side - Image Area */}
        {/* Removed 'hidden', given responsive heights, stacked at top on mobile */}
        <div className="w-full h-62.5 sm:h-75 md:h-auto md:w-1/2 relative bg-primary shrink-0">
          <Image
            src="/login.png" 
            alt="Sign Up Background"
            fill
            className="object-cover"
            priority
          />
          
          {/* Text Overlay - Responsive positioning and text sizes */}
          <div className="absolute bottom-6 left-6 md:bottom-16 md:left-12 text-white z-10">
            <h2 className="text-3xl md:text-[40px] font-bold leading-[1.1] tracking-tight">
              Join<br />
              The<br />
              Fleet
            </h2>
          </div>
        </div>
        
      </div>
    </div>
  );
}