import { DispatchBoard } from "@/components/site/DispatchBoard";
import { StandardPage } from "@/components/site/StandardPage";
import { WaitlistForm } from "@/components/site/WaitlistForm";

export default function UpdatesPage() {
  return (
    <StandardPage pageKey="updates">
      <DispatchBoard />
      <WaitlistForm sourcePage="updates" />
    </StandardPage>
  );
}
