export default function Head() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fatima",
    url: "https://portfolio-gray-six-i0ldk2z83x.vercel.app/",
    image: "https://portfolio-gray-six-i0ldk2z83x.vercel.app/Images/profile.jpg",
    jobTitle: "Web Developer",
    description:
      "Personal portfolio of Fatima — showcasing web development, design, and creative projects built with Next.js and Tailwind CSS.",
    sameAs: ["https://github.com/FatimaBilal110"],
    knowsAbout: [
      "Web Development",
      "UI/UX Design",
      "Next.js",
      "Tailwind CSS",
      "JavaScript"
    ]
  };

  return (
    <>
      <title>Fatima | Web Developer Portfolio</title>
      <meta
        name="description"
        content="Personal portfolio of Fatima — showcasing web development, design, and creative projects built with Next.js and Tailwind CSS."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
}
