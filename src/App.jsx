import { Code2, Smartphone, Building2, ArrowRight } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-obsidian-slate text-gray-100 overflow-x-hidden cyber-grid">
      {/* Header */}
      <header className="border-b border-gray-800 py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl md:text-2xl font-semibold tracking-widest text-electric-cyan">
            BUZZLEMAX OFFICIAL
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 text-center">
            We engineer high-performance web products and advanced application architectures.
          </h2>
          
          {/* Animated Tech Terminal */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-tech-graphite border border-gray-800 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-gray-900/50">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs text-gray-500 font-mono">buzzlemax-terminal</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="text-electric-cyan">&gt; BuzzleMaxOfficial Core System Online...</div>
                <div className="text-gray-400">&gt; Main Framework: React 19 + Tailwind v3 Native</div>
                <div className="text-gray-400">&gt; Mobile Engine: React Native Cross-Platform</div>
                <div className="text-emerald-400">&gt; Status: Ready for High-Ticket System Production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Operational Performance Hub */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-tech-graphite border border-gray-800 rounded-lg p-6 md:p-8">
            <h3 className="text-lg font-semibold mb-6 text-electric-cyan text-center">Real-Time Operational Performance Hub</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan mb-2">14ms</div>
                <div className="text-sm text-gray-400">Global Deployment Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan mb-2">100%</div>
                <div className="text-sm text-gray-400">Core Performance Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-cyan mb-2">99.9%</div>
                <div className="text-sm text-gray-400">System Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pure Development Services Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-electric-cyan">
            Pure Development Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Web Architecture Card */}
            <div className="bg-tech-graphite border border-gray-800 rounded-lg p-8 hover:border-electric-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-electric-cyan/10 rounded-lg">
                  <Code2 className="w-8 h-8 text-electric-cyan" />
                </div>
                <h4 className="text-xl font-semibold">Web Architecture & Design</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Custom React workflows, Tailwind optimization, and production-grade deployments
              </p>
            </div>

            {/* Mobile Engineering Card */}
            <div className="bg-tech-graphite border border-gray-800 rounded-lg p-8 hover:border-electric-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-electric-cyan/10 rounded-lg">
                  <Smartphone className="w-8 h-8 text-electric-cyan" />
                </div>
                <h4 className="text-xl font-semibold">Mobile & App Engineering</h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Cross-platform applications, custom state management, and scalable systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Portfolio */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-electric-cyan">
            Case Studies Portfolio
          </h3>
          <div className="bg-tech-graphite border border-gray-800 rounded-lg p-8 md:p-12 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-electric-cyan/10 rounded-lg">
                <Building2 className="w-8 h-8 text-electric-cyan" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-2">GHY Realtors</h4>
                <p className="text-gray-400">Luxury Real Estate Platform</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              A premium real estate platform featuring advanced property search, interactive maps, 
              and seamless user experience for luxury property listings.
            </p>
            <a
              href="https://buzzlemax.github.io/ghy-realtors-prototype/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-electric-cyan text-gray-900 font-semibold px-6 py-4 rounded-lg hover:bg-electric-cyan/90 hover:-translate-y-1 transition-all duration-300 min-h-[48px]"
            >
              View Project
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Direct Contact Infrastructure */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 text-center text-electric-cyan">
            Direct Contact
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com/buzzlemaxofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tech-graphite border border-gray-800 rounded-lg p-8 hover:border-electric-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-1 transition-all duration-300 group min-h-[48px] flex items-center justify-center"
            >
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-electric-cyan transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                <span className="text-gray-300 group-hover:text-electric-cyan transition-colors">Instagram</span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/buzzlemax"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tech-graphite border border-gray-800 rounded-lg p-8 hover:border-electric-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-1 transition-all duration-300 group min-h-[48px] flex items-center justify-center"
            >
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-electric-cyan transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span className="text-gray-300 group-hover:text-electric-cyan transition-colors">GitHub</span>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:swapnanilofficialdowarah@gmail.com"
              className="bg-tech-graphite border border-gray-800 rounded-lg p-8 hover:border-electric-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-1 transition-all duration-300 group min-h-[48px] flex items-center justify-center"
            >
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-electric-cyan transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <span className="text-gray-300 group-hover:text-electric-cyan transition-colors">Email</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2026 BuzzleMax Official. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
