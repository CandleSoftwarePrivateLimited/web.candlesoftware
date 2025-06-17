export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-950 via-violet-900 to-black text-white min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-violet-700">
        <h1 className="text-2xl font-bold text-violet-300">Candle Web</h1>
        <nav className="space-x-6 text-sm md:text-base">
          <a href="#" className="hover:text-violet-400">Home</a>
          <a href="#platforms" className="hover:text-violet-400">Platforms</a>
          <a href="#features" className="hover:text-violet-400">Features</a>
          <a href="#contact" className="hover:text-violet-400">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-violet-300">Modern Web Platforms. Built for Scale.</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto text-gray-300">
          Candle&apos;s next-gen web portals and SaaS solutions power businesses, education, and innovation.
        </p>
        <a href="#platforms" className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full font-semibold transition">Explore Web</a>
      </section>

      {/* Featured Platforms */}
      <section id="platforms" className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10 text-violet-200">Live Platforms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Candle Play Store", desc: "Games, apps, and digital tools under one premium storefront." },
            { name: "Thinko Web", desc: "Interactive education platform for class 1 to 12." },
            { name: "Client Dashboards", desc: "Custom admin panels for B2B client projects." },
            { name: "Subscription Portals", desc: "SaaS billing and access-based content delivery systems." },
            { name: "Candle Console", desc: "Admin control panel for your entire Candle ecosystem." },
            { name: "Hiring Dashboard", desc: "Track, hire, and manage developers & interns efficiently." },
          ].map((site) => (
            <div key={site.name} className="bg-purple-900 p-6 rounded-xl shadow hover:shadow-xl transition border border-violet-700">
              <div className="h-32 bg-violet-600 rounded mb-4 flex items-center justify-center text-xl font-bold text-white">
                {site.name}
              </div>
              <p className="text-sm text-gray-300">{site.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-purple-900 py-16 px-6 border-t border-purple-800">
        <h3 className="text-3xl font-bold text-center mb-10 text-violet-200">Why Choose Candle Web?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h4 className="text-xl font-semibold mb-2">⚙️ Fully Customizable</h4>
            <p className="text-gray-300">Tailored for your business needs — from APIs to dashboards.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">🚀 Blazing Fast</h4>
            <p className="text-gray-300">Built using modern stacks like Next.js, Vercel, MongoDB, and AWS.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">📊 Scalable & Secure</h4>
            <p className="text-gray-300">From MVP to enterprise-grade web platforms with top-tier security.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 border-t border-violet-800">
        <p>&copy; {new Date().getFullYear()} Candle Software Pvt Ltd. All rights reserved.</p>
        <p className="text-sm">web.candlesoftware.org</p>
      </footer>
    </main>
  );
}
