import ConfigSection from "@app/components/config-section";

export default function Home(): JSX.Element {
  return (
    <section className="h-full bg-background">
      <div className="container mx-auto h-full py-8 px-4 w-full">
        <ConfigSection />
      </div>
    </section>
  );
}
