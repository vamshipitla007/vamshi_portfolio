export default function ContactSection() {
  return (
    <section className="relative min-h-[60vh] w-full bg-[#0b001a] text-white">
      
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-10">
        
        {/* Title */}
        <h2 className="text-[25px] font-normal tracking-[0.02em]">
          Contact
        </h2>

        {/* Description */}
        <p className="text-[15px] tracking-[0.02em] leading-[1.6] max-w-3xl text-gray-300">
          I'm currently looking to join a cross-functional team that values improving people's lives
          through accessible design. or have a project in mind? Let's connect.
        </p>

        {/* Email */}
        <p className="text-[15px] tracking-[0.02em] text-gray-200">
          vamshipitla007@gmail.com
        </p>

        {/* Icons */}
        <div className="flex items-center gap-6 pt-4">
          
          {/* Instagram */}
          <a href="#" className="hover:opacity-70 transition">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.5" fill="white"/>
            </svg>
          </a>

          {/* Dribbble */}
          <a href="#" className="hover:opacity-70 transition">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
              <path d="M2 12h20" stroke="white" strokeWidth="2"/>
              <path d="M12 2c3 4 5 8 5 10s-2 6-5 10c-3-4-5-8-5-10s2-6 5-10z" stroke="white" strokeWidth="2"/>
            </svg>
          </a>

          {/* Google */}
          <a href="#" className="hover:opacity-70 transition">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M21.35 11.1h-9.18v2.92h5.27c-.23 1.34-1.6 3.94-5.27 3.94-3.18 0-5.77-2.63-5.77-5.87s2.59-5.87 5.77-5.87c1.81 0 3.02.77 3.72 1.43l2.54-2.46C17.36 3.85 15.07 3 12.17 3 6.99 3 2.8 7.19 2.8 12.35S6.99 21.7 12.17 21.7c6.45 0 9.06-4.52 9.06-6.86 0-.46-.05-.82-.12-1.18z"/>
            </svg>
          </a>

        </div>

      </div>
    </section>
  );
}