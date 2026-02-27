import { redirect } from 'next/navigation';

export default function Home() {
  // Immediately send users to the auth flow
  redirect('/sign-in');
}