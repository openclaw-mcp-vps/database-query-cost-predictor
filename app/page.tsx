export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Query Costs<br />
          <span className="text-[#58a6ff]">Before You Run Them</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste your SQL query, select your cloud database provider, and instantly get cost predictions and optimization suggestions — before triggering an expensive operation.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Access — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works with AWS RDS, BigQuery, Snowflake, and more.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Static SQL Parsing', 'Cost Estimation', 'Index Suggestions', 'Multi-Cloud Support', 'Query Rewriting Tips'].map((f) => (
            <span key={f} className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Paste Your Query', desc: 'Drop in any SELECT, JOIN, or aggregation query from your codebase.' },
            { step: '02', title: 'Choose Provider', desc: 'Select AWS RDS, BigQuery, Snowflake, or Redshift as your target.' },
            { step: '03', title: 'Get Cost Report', desc: 'Receive estimated cost, row scan count, and actionable optimizations.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-xs font-bold mb-2 tracking-widest">{item.step}</div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited query analyses',
              'All cloud providers',
              'Cost breakdown reports',
              'Index & rewrite suggestions',
              'Email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start for $19/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Does it actually run my queries?',
              a: 'No. QueryCost uses static SQL parsing and metadata from your cloud provider to estimate costs without executing anything against your data.',
            },
            {
              q: 'Which databases are supported?',
              a: 'AWS RDS (PostgreSQL & MySQL), Google BigQuery, Snowflake, and Amazon Redshift are supported at launch, with more providers on the roadmap.',
            },
            {
              q: 'How accurate are the cost predictions?',
              a: 'Estimates are based on row counts, index usage, and provider pricing APIs. Real costs may vary, but predictions are accurate enough to catch expensive queries before they run.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} QueryCost. All rights reserved.
      </footer>
    </main>
  )
}
