import HomePage from "@/components/HomePage";
import MainModal from "@/components/MainModal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <MainModal />
      </section>

      <section>
        <HomePage />
      </section>
    </main>
  );
}
