
import { useRef } from "react";

const SinglePageNavigation = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const sections = [
    {
      name: "Home",
      ref: homeRef,
      description: "Welcome to our website.",
    },
    {
      name: "About",
      ref: aboutRef,
      description: "Learn more about our website and our team.",
    },
    {
      name: "Services",
      ref: servicesRef,
      description: "Explore the services we provide.",
    },
    {
      name: "Contact",
      ref: contactRef,
      description: "Contact us for more information.",
    },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Task 3 - Single Page Navigation
      </h1>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() => scrollToSection(section.ref)}
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
          >
            {section.name}
          </button>
        ))}
      </div>

      {sections.map((section, index) => (
        <section
          key={section.name}
          ref={section.ref}
          className={`mb-6 min-h-60 scroll-mt-6 rounded-2xl p-8 shadow ${
            index % 2 === 0 ? "bg-white" : "bg-blue-50"
          }`}
        >
          <h2 className="mb-3 text-2xl font-bold text-blue-700">
            {section.name}
          </h2>

          <p className="text-lg text-gray-600">
            {section.description}
          </p>
        </section>
      ))}
    </main>
  );
};

export default SinglePageNavigation;
