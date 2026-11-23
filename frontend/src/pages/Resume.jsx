import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiDownload,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import profileData from "../data/profile";

const Resume = () => {
  useEffect(() => {
    document.title = `${profileData.fullName} — Resume / CV | Junior Full-Stack Web Developer`;
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const resumeProjects = [
    {
      id: "wedplan",
      title: "1. WedPlan — Wedding Planning & Vendor Management Platform",
      description:
        "A full-stack wedding planning platform that helps couples explore services, view vendor portfolios, and manage bookings.",
      techStack:
        "Next.js, React.js, TypeScript, Tailwind CSS, shadcn/ui, Node.js, Express.js, MongoDB, Better Auth, Stripe, REST API",
      live: "https://wedplan-client-rho.vercel.app/",
      client: "https://github.com/yousufali01/WedPlan_Client",
      server: "https://github.com/yousufali01/WedPlan_Server",
      bullets: [
        "Browse categorized wedding services across venues, photography, catering, and decor.",
        "Implemented decoupled client-server architecture with secure RESTful endpoints and JWT authentication.",
        "Built an administrative management dashboard to oversee vendor listings, categories, and customer requests.",
        "Responsive luxury-themed user interface with service discovery and client inquiry workflows.",
      ],
    },
    {
      id: "booknook",
      title: "2. BookNook — Online Library Management Platform",
      description:
        "A full-stack library platform that helps readers explore books, view book information and manage borrowing activity.",
      techStack:
        "Next.js, React.js, TypeScript, Node.js, Express.js, MongoDB, Better Auth, JWT, REST API",
      live: "https://booknook-client-psi.vercel.app/",
      client: "https://github.com/yousufali01/BookNook-Client",
      server: "https://github.com/yousufali01/BookNook-Server",
      bullets: [
        "Browse the book collection and view individual book details.",
        "Register and sign in to access authenticated features and manage personal borrowing records.",
        "Manage book records through create, update and delete operations.",
      ],
    },
    {
      id: "bazar-dor",
      title: "3. Bazar-Dor — E-commerce Web Application",
      description:
        "An e-commerce application featuring category-based product discovery and API-driven product listings.",
      techStack:
        "Next.js, React.js, TypeScript, Tailwind CSS, DaisyUI, Better Auth, MongoDB, REST API",
      live: "https://bazar-dor-three-xi.vercel.app/",
      github: "https://github.com/yousufali01/Bazar-Dor",
      bullets: [
        "Explore products through category-based browsing and load data from external APIs.",
        "Navigate a responsive shopping interface built with reusable modular components.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#070c18] py-10 px-4 sm:px-6 lg:px-8 text-slate-100 font-sans print:bg-white print:py-0 print:px-0 print:text-black">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl shadow-sm hover:bg-slate-800 hover:text-cyan-400 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {/* Download Original PDF Button */}
          <a
            href={profileData.contact.resumePdfUrl}
            download="Md_Yousuf_Ali_Resume_Updated.pdf"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-cyan-500/50 hover:border-cyan-400 px-5 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <HiDownload className="text-lg text-cyan-400" />
            <span>Download Official PDF</span>
          </a>

          {/* Print / Save as PDF Button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
          >
            <HiPrinter className="text-lg" />
            <span>Print View</span>
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-[#0f172a] rounded-3xl shadow-2xl border border-slate-800 p-8 sm:p-12 print:bg-white print:text-black print:shadow-none print:border-none print:p-0 print:rounded-none">
        {/* Header Section */}
        <header className="border-b border-slate-800 print:border-gray-300 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <h1 className="text-3xl sm:text-4xl font-black text-white print:text-black tracking-tight uppercase">
                {profileData.fullName}
              </h1>
              <p className="text-sm sm:text-base font-bold text-cyan-400 print:text-blue-700 tracking-wide uppercase">
                {profileData.designation}
              </p>
            </div>

            {/* Profile Photo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-lg shrink-0 print:hidden">
              <img
                src={profileData.profilePhoto}
                alt={profileData.fullName}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs text-slate-300 print:text-gray-800 pt-3 border-t border-slate-800/80 print:border-gray-200">
            <a
              href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition"
            >
              <HiPhone className="text-cyan-400 print:text-blue-700 text-sm shrink-0" />
              <span>{profileData.contact.phoneDisplay}</span>
            </a>

            <span className="text-slate-600 print:text-gray-400">•</span>

            <a
              href={`mailto:${profileData.contact.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition"
            >
              <HiMail className="text-cyan-400 print:text-blue-700 text-sm shrink-0" />
              <span>{profileData.contact.email}</span>
            </a>

            <span className="text-slate-600 print:text-gray-400">•</span>

            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-cyan-400 print:text-blue-700 text-sm shrink-0" />
              <span>{profileData.contact.location}</span>
            </div>

            <span className="text-slate-600 print:text-gray-400">•</span>

            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition"
            >
              <FaGithub className="text-white print:text-black text-sm shrink-0" />
              <span>GitHub</span>
            </a>

            <span className="text-slate-600 print:text-gray-400">•</span>

            <a
              href={profileData.contact.portfolio || "/"}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition"
            >
              <FaGlobe className="text-cyan-400 print:text-blue-700 text-sm shrink-0" />
              <span>Portfolio</span>
            </a>

            <span className="text-slate-600 print:text-gray-400">•</span>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 print:text-black transition"
            >
              <FaLinkedin className="text-blue-400 print:text-blue-700 text-sm shrink-0" />
              <span>LinkedIn</span>
            </a>
          </div>
        </header>

        {/* Section: Career Objective */}
        <section className="mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-700 print:border-gray-400 pb-1.5 mb-2.5">
            Career Objective
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed text-justify">
            {profileData.summary}
          </p>
        </section>

        {/* Section: Skills */}
        <section className="mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-700 print:border-gray-400 pb-1.5 mb-2.5">
            Skills
          </h2>
          <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 print:text-gray-800">
            <div>
              <strong className="text-white print:text-black">Programming Languages: </strong>
              <span>{profileData.resumeSkills.programmingLanguages}</span>
            </div>
            <div>
              <strong className="text-white print:text-black">Frontend: </strong>
              <span>{profileData.resumeSkills.frontend}</span>
            </div>
            <div>
              <strong className="text-white print:text-black">Backend &amp; APIs: </strong>
              <span>{profileData.resumeSkills.backend}</span>
            </div>
            <div>
              <strong className="text-white print:text-black">Database: </strong>
              <span>{profileData.resumeSkills.database}</span>
            </div>
            <div>
              <strong className="text-white print:text-black">Tools &amp; Platforms: </strong>
              <span>{profileData.resumeSkills.tools}</span>
            </div>
          </div>
        </section>

        {/* Section: Projects */}
        <section className="mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-700 print:border-gray-400 pb-1.5 mb-3">
            Projects
          </h2>

          <div className="space-y-4">
            {resumeProjects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                    {proj.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 pl-3">
                  {proj.description}
                </p>

                <p className="text-xs text-slate-400 print:text-gray-700 pl-3">
                  <strong className="text-slate-300 print:text-black">Tech Stack: </strong>
                  <span className="italic">{proj.techStack}</span>
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 print:text-blue-700 pl-3 pt-0.5">
                  <strong className="text-slate-300 print:text-black">Links: </strong>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline flex items-center gap-0.5"
                    >
                      Live Demo <HiExternalLink className="text-[10px]" />
                    </a>
                  )}

                  {proj.client && proj.server ? (
                    <>
                      <span className="text-slate-600 print:text-gray-400">|</span>
                      <a
                        href={proj.client}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline flex items-center gap-0.5"
                      >
                        Client <HiExternalLink className="text-[10px]" />
                      </a>
                      <span className="text-slate-600 print:text-gray-400">|</span>
                      <a
                        href={proj.server}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline flex items-center gap-0.5"
                      >
                        Server <HiExternalLink className="text-[10px]" />
                      </a>
                    </>
                  ) : (
                    proj.github && (
                      <>
                        <span className="text-slate-600 print:text-gray-400">|</span>
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline flex items-center gap-0.5"
                        >
                          GitHub <HiExternalLink className="text-[10px]" />
                        </a>
                      </>
                    )
                  )}
                </div>

                <ul className="mt-1 list-disc list-inside text-xs sm:text-sm text-slate-300 print:text-gray-800 space-y-0.5 pl-3">
                  {proj.bullets.map((bullet, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-700 print:border-gray-400 pb-1.5 mb-2.5">
            Education
          </h2>
          <div className="text-xs sm:text-sm text-slate-300 print:text-gray-800">
            <strong className="text-white print:text-black">
              {profileData.resumeEducation.degree}
            </strong>
            <span> — {profileData.resumeEducation.institution} | {profileData.resumeEducation.duration}</span>
          </div>
        </section>

        {/* Section: Extra-Curricular Activities */}
        <section className="mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-700 print:border-gray-400 pb-1.5 mb-2.5">
            Extra-Curricular Activities
          </h2>
          <div className="text-xs sm:text-sm text-slate-300 print:text-gray-800 space-y-0.5">
            <div>
              <strong className="text-white print:text-black">
                {profileData.resumeExtraCurricular.title}
              </strong>
              <span> — {profileData.resumeExtraCurricular.event}</span>
            </div>
            <p className="text-slate-400 print:text-gray-700">
              {profileData.resumeExtraCurricular.description}
            </p>
          </div>
        </section>

        {/* Section: Languages */}
        <section className="mb-6">
          <h2 className="text-xs sm:text-sm font-bold text-white print:text-black uppercase tracking-wider border-b border-slate-700 print:border-gray-400 pb-1.5 mb-2.5">
            Languages
          </h2>
          <div className="text-xs sm:text-sm text-slate-300 print:text-gray-800">
            <strong className="text-white print:text-black">Bangla</strong> — Native &nbsp;|&nbsp;{" "}
            <strong className="text-white print:text-black">English</strong> — Basic
          </div>
        </section>

        {/* Download Button Footer Banner (Hidden during print) */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 print:hidden text-center">
          <p className="text-xs text-slate-400 mb-3">
            Looking for a print-ready or downloadable PDF version?
          </p>
          <a
            href={profileData.contact.resumePdfUrl}
            download="Md_Yousuf_Ali_Resume_Updated.pdf"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition shadow-lg shadow-cyan-500/20"
          >
            <HiDownload className="text-lg" />
            <span>Download Updated Resume (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
