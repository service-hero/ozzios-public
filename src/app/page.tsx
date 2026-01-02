import { DocsHomeView } from "@/features/docs/views/DocsHomeView";
import { DocsLayout } from "@/features/docs/layouts/DocsLayout";

export default function HomePage() {
  return (
    <DocsLayout>
      <DocsHomeView />
    </DocsLayout>
  );
}

