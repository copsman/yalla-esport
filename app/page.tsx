import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import { Button } from "@nextui-org/react";

export default async function Index() {
  return (
    <>
      <div>hello world</div>
      <iframe
        src={`https://player.twitch.tv/?channel=compass_cs2&parent=localhost`}
        height="500"
        width="100%"
        allowFullScreen={true}>
      </iframe>
      <Button color="primary" variant="solid">
        Solid
      </Button>
    </>
  )
}
