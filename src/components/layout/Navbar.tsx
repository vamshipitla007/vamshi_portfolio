// src/components/layout/Navbar.tsx

const navItems = [
  { label: "Home", id: "home" },
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "example-projects" },
];

export default function Navbar() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1A0B2E]">
      <div className="h-18 px-6 lg:px-30 xl:px-50 2xl:px-50 flex items-center justify-end">
        <nav className="flex gap-10 lg:gap-20 xl:gap-30 2xl:gap-42 text-20 font-semibold tracking-[0.02em]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-white transition"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
