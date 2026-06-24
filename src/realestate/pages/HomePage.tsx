import { motion } from 'framer-motion';
import { ArrowRight, Building2, Compass, Flame, Home, MapPin, Sparkles, Users } from 'lucide-react';
import { agents } from '../data/agents';
import { testimonials } from '../data/testimonials';
import { properties } from '../data/properties';
import { AgentCard } from '../components/AgentCard';
import { ContactForm } from '../components/ContactsForm';
import { PropertyCard } from '../components/PropertyCard';
import { SectionHeading } from '../components/SectionHeading';
import { SearchBar } from '../components/SearchBar';
import { useRealEstateFilters } from '../hooks/useRealEstateFilters';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const { filters, setFilterValue, paginated } = useRealEstateFilters(properties);
  const navigate = useNavigate();

  return (
    <main className="relative overflow-hidden pb-24">
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,107,53,0.16),_transparent_48%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.8))] pt-24 text-white sm:pt-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-200">
                <Sparkles className="h-4 w-4" /> Premium Real Estate
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
                Discover distinctive homes with luxury, style, and unmatched convenience.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200/90">
                Browse curated properties from top cities, filter by price, size, and type, and connect with trusted agents for a seamless buying experience.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 sm:max-w-xl">
                <button className="rounded-3xl bg-accent px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                  Explore Listings
                </button>
                <button className="rounded-3xl border border-white/20 bg-white/10 px-6 py-4 text-sm text-white transition hover:border-white/30">
                  Learn About Us
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <article className="rounded-[28px] bg-slate-950/80 p-6 text-white shadow-xl shadow-slate-950/20">
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Featured property</p>
                  <h2 className="mt-4 text-2xl font-semibold">Oceanfront Villa with Private Pool</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Elegant coastal home with designer interiors, infinity-edge terrace, and panoramic water views.
                  </p>
                  <div className="mt-8 grid gap-3 text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2"><Home className="h-4 w-4" /> 5 Beds • 5 Baths</span>
                    <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Malibu, CA</span>
                    <span className="inline-flex items-center gap-2"><Flame className="h-4 w-4" /> $5.2M</span>
                  </div>
                </article>
                <article className="rounded-[28px] bg-slate-950/95 p-6 text-white shadow-xl shadow-slate-950/20">
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Fast facts</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {[
                      { icon: <Building2 className="h-5 w-5" />, label: 'Premium locations' },
                      { icon: <Users className="h-5 w-5" />, label: 'Top-rated agents' },
                      { icon: <Compass className="h-5 w-5" />, label: 'Curated search' },
                      { icon: <Sparkles className="h-5 w-5" />, label: 'Luxury service' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-3xl bg-white/10 p-4">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-800 text-white">
                          {item.icon}
                        </div>
                        <p className="mt-4 text-sm text-slate-200">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="-mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SearchBar filters={filters} onChange={(field, value) => setFilterValue(field as any, value)} />
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Featured" subtitle="Discover our most luxurious properties." />
          <div className="mt-10 grid gap-8 xl:grid-cols-3">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={() => navigate(`/realestate/properties/${property.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Categories" subtitle="Find the ideal property type for your lifestyle." align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {['Villas', 'Apartments', 'Commercial Spaces', 'Farm Houses', 'Luxury Homes', 'Plots'].map((category) => (
              <div key={category} className="rounded-[28px] border border-white/10 bg-white/80 p-6 text-center shadow-[0_24px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80">
                <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">Category</p>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{category}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Designed for premium buyers seeking exceptional homes.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Latest" subtitle="Newest listings updated daily." />
          <div className="mt-10 grid gap-8 xl:grid-cols-3">
            {paginated.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={() => navigate(`/realestate/properties/${property.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Why choose us" subtitle="A premium experience from search to closing." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { title: 'Expert guidance', description: 'Specialized agents with deep local knowledge.' },
              { title: 'Curated selection', description: 'Handpicked properties in the most desirable neighborhoods.' },
              { title: 'White-glove service', description: 'Personalized support for every client and closing.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[32px] border border-white/10 bg-white/80 p-8 shadow-xl shadow-slate-950/10 backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Agents" subtitle="Meet our trusted property advisors." align="center" />
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Testimonials" subtitle="What clients say about working with us." align="center" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} whileHover={{ y: -5 }}>
                <div className="rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-xl shadow-slate-950/10 backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80">
                  <div className="mb-4 flex items-center gap-4">
                    <img src={testimonial.photo} alt={testimonial.name} className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
            <div className="rounded-[40px] bg-slate-950/95 p-10 text-white shadow-2xl shadow-slate-950/40">
              <p className="uppercase tracking-[0.32em] text-accent">Let’s get started</p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight">Your perfect property is a conversation away.</h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
                Reach out and our team will match you with the best luxury properties based on your priorities and lifestyle.
              </p>
              <div className="mt-10 grid gap-4 text-sm text-slate-300">
                <p className="inline-flex items-center gap-3"><MapPin className="h-5 w-5" /> 230 Luxury Ave, San Francisco, CA</p>
                <p className="inline-flex items-center gap-3"><ArrowRight className="h-5 w-5" /> hello@estateflow.com</p>
                <p className="inline-flex items-center gap-3"><ArrowRight className="h-5 w-5" /> +1 (800) 555-0198</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
