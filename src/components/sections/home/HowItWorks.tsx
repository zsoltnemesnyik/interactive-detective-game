import { HOW_IT_WORKS } from "@/lib/strings"

const SectionHowItWorks = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{HOW_IT_WORKS.heading}</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">{HOW_IT_WORKS.steps[0].title}</h3>
            <p className="text-sm text-muted-foreground">{HOW_IT_WORKS.steps[0].description}</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">{HOW_IT_WORKS.steps[1].title}</h3>
            <p className="text-sm text-muted-foreground">{HOW_IT_WORKS.steps[1].description}</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">{HOW_IT_WORKS.steps[2].title}</h3>
            <p className="text-sm text-muted-foreground">{HOW_IT_WORKS.steps[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SectionHowItWorks