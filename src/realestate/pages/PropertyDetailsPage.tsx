import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BedDouble, Ruler } from 'lucide-react';
import { properties } from '../data/properties';
import { agents } from '../data/agents';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactsForm';
import { PropertyCard } from '../components/PropertyCard';
import { formatCurrency } from '../../utils/format';

export function PropertyDetailsPage() {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const property = properties.find((item) => item.id === propertyId) ?? properties[0];
  const agent = agents.find((item) => item.id === property.agentId) ?? agents[0];
  const [selectedImage, setSelectedImage] = useState(property.gallery[0]);
  const similarProperties = useMemo(
    () => properties.filter((item) => item.category === property.category && item.id !== property.id).slice(0, 3),
    [property.category, property.id],
  );

  return (
    <main className="relative overflow-hidden pb-24">
      <section className="bg-slate-950/95 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <button onClick={() => navigate(-1)} className="mb-6 text-sm text-slate-300 transition hover:text-white">
            ← Back to listings
          </button>
          <SectionHeading title="Property details" subtitle={property.title} />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300">{property.description}</p>
        </div>
      </section>

      <section className="-mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.25)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80">
            <div className="rounded-[28px] overflow-hidden bg-slate-900">
              <img src={selectedImage} alt="Selected property" className="h-[420px] w-full object-cover" />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {property.gallery.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className={`overflow-hidden rounded-3xl border p-1 transition ${
                    selectedImage === item ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img src={item} alt="Gallery property" className="h-24 w-full object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: <BedDouble className="h-5 w-5" />, label: `${property.bedrooms} Bedrooms` },
                { icon: <span className="inline-flex h-5 w-5 items-center justify-center text-slate-500">🛁</span>, label: `${property.bathrooms} Bathrooms` },
                { icon: <Ruler className="h-5 w-5" />, label: `${property.area} sq ft` },
                { icon: <span className="inline-flex h-5 w-5 items-center justify-center text-amber-400">⭐</span>, label: `${property.rating} Rating` },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl bg-slate-100 px-5 py-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-200 dark:bg-slate-700">
                    {item.icon}
                  </div>
                  <p className="font-semibold">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <SectionHeading title="Features" subtitle="Highlights of this remarkable property." />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <div key={feature} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <SectionHeading title="Amenities" subtitle="Premium conveniences included." />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Floor Plans</h3>
                <div className="mt-6 space-y-4">
                  {property.floorPlans.map((plan) => (
                    <div key={plan.title} className="rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-950">
                      <h4 className="font-semibold text-slate-950 dark:text-white">{plan.title}</h4>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{plan.bedrooms} beds • {plan.bathrooms} baths • {plan.area}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Location</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{property.address}</p>
                <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200 dark:border-slate-700">
                  <iframe
                    title="Property location"
                    className="h-72 w-full border-0"
                    loading="lazy"
                    src={`https://maps.google.com/maps?q=${property.mapQuery}&z=14&output=embed`}
                  />
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.25)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Price details</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
                  <span>Listing price</span>
                  <span className="font-semibold text-slate-950 dark:text-white">{formatCurrency(property.price)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
                  <span>Estimated taxes</span>
                  <span>$12,400 / yr</span>
                </div>
                <div className="rounded-3xl bg-slate-100 px-4 py-4 text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  <span className="font-semibold">Financing options available</span>
                </div>
              </div>
              <button className="mt-6 w-full rounded-3xl bg-accent px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                Schedule a viewing
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.25)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Agent information</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={agent.photo} alt={agent.name} className="h-20 w-20 rounded-3xl object-cover" />
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">{agent.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{agent.title}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>Email: {agent.email}</p>
                <p>Phone: {agent.phone}</p>
                <p>Office: {agent.office}</p>
              </div>
              <button
                onClick={() => window.location.assign(`/agents/${agent.id}`)}
                className="mt-6 w-full rounded-3xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-accent dark:text-slate-950"
              >
                View agent profile
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.25)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80"
            >
              <SectionHeading title="Inquire" subtitle="Have questions about this listing?" />
              <ContactForm />
            </motion.div>
          </aside>
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Similar properties" subtitle="Other premium listings you may love." />
          <div className="mt-10 grid gap-8 xl:grid-cols-3">
            {similarProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onViewDetails={() => {}} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
