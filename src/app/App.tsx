import { ThemeProvider } from "./components/ThemeProvider";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { ProfileSection } from "./components/ProfileSection";
import { InterestSection } from "./components/InterestSection";
import { TechStackSection } from "./components/TechStackSection";
import { Guestbook } from "./components/Guestbook";
import { SocialLinks } from "./components/SocialLinks";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 transition-colors">
        <div className="fixed top-4 right-4 z-50">
          <DarkModeToggle />
        </div>
        <div className="max-w-6xl mx-auto">
          <ProfileSection />
          <InterestSection />
          <TechStackSection />
          <Guestbook />
        </div>
        <SocialLinks />
      </div>
    </ThemeProvider>
  );
}