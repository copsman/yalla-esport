import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import HeroSection from "@/components/ui/layout/HeroSection";
import UpcomingMatches from "@/components/ui/layout/UpcomingMatches";
import Teams from "@/components/ui/layout/Teams";
import News from "@/components/ui/layout/News";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <HeroSection />
      <UpcomingMatches />
      <Teams />
      <News />
    </>
  );
}
