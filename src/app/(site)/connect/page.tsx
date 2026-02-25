import { StandardPage } from "@/components/site/StandardPage";
import { WaitlistForm } from "@/components/site/WaitlistForm";

export default function ConnectPage() {
  return (
    <StandardPage pageKey="connect">
      <WaitlistForm sourcePage="connect" />
    </StandardPage>
  );
}
