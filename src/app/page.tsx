import { Banner } from "./components/Banner";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b pb-8">
      <main className="relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16">
        <Banner />
      </main>
    </div>
  );
}
