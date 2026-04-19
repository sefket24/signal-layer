import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import TriageLogic from "@/components/TriageLogic";
import InteractiveExample from "@/components/InteractiveExample";
import Impact from "@/components/Impact";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200">
      <Hero />
      <Problem />
      <TriageLogic />
      <InteractiveExample />
      <Impact />
      <Closing />
    </main>
  );
}
