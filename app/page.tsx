import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Demo Proof</h1>
        </div>

       
        <section className="border-2 border-border rounded-lg p-6 bg-card">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">NextJS</h2>
          <div className="mb-4">
            <h1 className="text-4xl font-bold">Hello World!!</h1>
          </div>
        </section>

        
        <section className="border-2 border-border rounded-lg p-6 bg-card">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">TailwindCSS</h2>
          <div className="mb-4">
            <p className="text-5xl font-bold text-black-600">The text appears large, bold, and blue.</p>
          </div>
        </section>

        
        <section className="border-2 border-border rounded-lg p-6 bg-card">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">ReactJS</h2>
          <div className="mb-4">
            <div className="flex justify-center">
            <button className="px-2 py-1 border rounded-lg border-black-300 rounded bg-white text-black hover:bg-blue-200">
              Submit
            </button>
            </div>
          </div>
        </section>

       
        <section className="border-2 border-border rounded-lg p-6 bg-card">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">ShadCN</h2>
          <div className="mb-4">
            <div className="flex gap-8 flex-wrap">
              <Button>Click Here</Button>
              <Button variant="secondary">Cancel</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
