import "./globals.css";
import EntryPoint from "@/components/EntryPoint/EntryPoint";
import { UserProvider } from "@/context/UserContext/UserContext";

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <EntryPoint children={children} />
    </UserProvider>
  );
}
