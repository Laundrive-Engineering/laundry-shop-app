import { useSession, getSession } from 'next-auth/react'; // Import getSession
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

type AuthProviderProps = {
  children: ReactNode,
};

export function AuthProvider({ children }: AuthProviderProps) {
  const { status, data: session } = useSession();
  const router = useRouter();
  const [checkedSession, setCheckedSession] = useState(false);
  console.log('AuthProvider session----------------', session);
  useEffect(() => {
    const checkSession = async () => {
      // If we've already checked the session, return
      if (checkedSession) {
        return;
      }

      // Use getSession to retrieve the session on the server side
      const serverSession = await getSession();

      if (serverSession) {
        // If there's an active session, update the client-side session
        session?.user; // Update the session
      } else {
        // If there's no active session, redirect to the login page
        router.push('/login'); // Replace '/login' with your actual login page URL
      }

      // Set the flag to true to prevent further checks
      setCheckedSession(true);
    };

    if (status === 'loading') {
      // Wait until the session is loaded before checking
      return;
    }

    if (session === null) {
      // If the client-side session is null, check the server-side session
      checkSession();
    }
  }, [session, router, status, checkedSession]);

  return <div>{children}</div>;
}
