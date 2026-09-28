import { HOW_IT_WORKS } from "@/lib/strings";

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {HOW_IT_WORKS.heading}
        </h2>
        <div className="grid gap-8 text-center md:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <div key={i}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
