import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero");

  // Optional: highlight based on scroll
  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let sec of sections) {
        const elem = document.getElementById(sec);
        if (elem && scrollPos >= elem.offsetTop) {
          setActive(sec);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Me", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 flex justify-end gap-6 p-6 bg-black bg-opacity-80 z-50">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setActive(item.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors
            ${active === item.id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}
          `}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}