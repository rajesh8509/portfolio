'use client';
import { useEffect, useState, ReactNode } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/* ======== EDIT YOUR DETAILS HERE ======== */
const P = {
  name: 'Rajesh E', title: 'AI & Data Science Undergraduate · Aspiring Data Science / ML /Full-stack developer',
  email: 'rajeshelangovan2006@gmail.com', phone: '+91 73052 88509', linkedin: 'https://linkedin.com/in/rajesh2006', github: 'https://github.com/rajesh8509',
  location: 'Chennai, Tamil Nadu, India', cv: '/cv.pdf',
  bio: ['I’m a third-year B.Tech student in Artificial Intelligence & Data Science with hands-on experience in machine learning, data preprocessing and exploratory data analysis.',
        'I enjoy turning real-world data and everyday operational problems into working solutions, from regression models in Python to a shift-scheduling system in Java and MySQL. I’m looking for a Data Science / ML internship in a fast-paced engineering team.'],
  stats: [['8.06', 'CGPA (up to 4th sem)'], ['2', 'Projects built'], ['2', 'Certifications']],
};
const skills = [
  ['Languages', ['Python', 'SQL', 'Java', 'HTML (basic)']],
  ['AI & Data Science', ['Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn']],
  ['Machine Learning', ['Regression', 'Feature Engineering', 'Cross-validation', 'EDA']],
  ['Databases', ['MySQL', 'MongoDB']],
  ['Tools & DevOps', ['Git', 'GitHub', 'VS Code', 'Google Colab']],
  ['Automation', ['UiPath', 'Azure ML (intro)']],
] as [string, string[]][];
const roles = [
  { t: 'Technical', items: ['Data Science Intern', 'Machine Learning Intern', 'Data Analyst Intern', 'Python Developer Intern','Full-stack Developer Intern'] },
  { t: 'Operations & Automation', items: ['RPA / Automation Intern', 'Business Analytics Intern', 'Operations & Data Support', 'Project Coordination'] },
];
const work = [
  { co: 'Rajalakshmi Institute of Technology, Chennai', role: 'B.Tech — AI & Data Science (3rd Year)', when: '2024 — 2028', pts: ['CGPA 8.06 up to the 4th semester.', 'Coursework in Machine Learning, Data Analytics, Data Wrangling, DBMS and Statistics.', 'Building practical projects in Python and Java.'] },
  { co: 'ICT Academy · Coursera', role: 'Certifications', when: 'Ongoing', pts: ['UiPath Automation — ICT Academy.', 'Python for Everybody — Coursera certificate.'] },
  { co: 'Sri Annai Raani Convent Higher Secondary School, Pondicherry', role: 'Higher Secondary — Computer Science', when: '2024', pts: ['Completed with 90%.'] },
  { co: 'Tas English Higher Secondary School, Pondicherry',role: 'Secondary School ', when: '2022', pts: ['Completed with 83%.'] }
];
const projects = [
  { n: 'House Price Prediction', d: 'Regression model to predict housing prices using feature engineering and cross-validation, reaching 85% accuracy on test data.', s: ['Python', 'Scikit-learn', 'Pandas'] },
  { n: 'Restaurant Shift Scheduler', d: 'Shift scheduling system that assigns waiters, chefs and workers across a restaurant, backed by a MySQL database.', s: ['Java', 'MySQL'] },
];
const edu = [
  { t: 'B.Tech — Artificial Intelligence & Data Science', s: 'Rajalakshmi Institute of Technology · 2024 — 2028', d: 'CGPA 8.06 (up to 4th semester).' },
  { t: 'Higher Secondary (12th) — Computer Science', s: 'Sri Annai Raani Convent HSS, Pondicherry · 2024', d: '90%.' },
  { t: 'Relevant coursework', s: 'Selected subjects', d: 'AI, Machine Learning, Python for Data Science, Data Analytics, Data Wrangling, DBMS, Design & Analysis of Algorithms, OOP, Statistics, Probability, Operating Systems, Intro to Azure Machine Learning.' },
];
const lead = ['UiPath Automation — ICT Academy', 'Python for Everybody — Coursera', 'Languages: Tamil (native), English', 'CGPA 8.06 through 4th semester'];
const nav = ['About', 'Expertise', 'Roles', 'Journey', 'Work', 'Education', 'Contact'];
/* ========================================= */

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (<motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>{children}</motion.div>);
}
function Head({ k, title }: { k: string; title: string }) {
  return (<Reveal className="mb-12"><p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">{k}</p><h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2></Reveal>);
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  useEffect(() => { document.documentElement.classList.add('dark'); }, []);
  const initials = P.name.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <main className="relative overflow-x-hidden">
      <motion.div style={{ scaleX: bar }} className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-indigo-500 to-cyan-400" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-3 z-50 px-3">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3">
          <a href="#top" className="font-bold">{initials}<span className="text-indigo-500">.</span></a>
          <ul className="hidden gap-6 text-sm md:flex">
            {nav.map((n) => (<li key={n}><a href={`#${n.toLowerCase()}`} className="opacity-70 transition hover:text-indigo-500 hover:opacity-100">{n}</a></li>))}
            <li><a href={P.cv} target="_blank" rel="noreferrer" className="opacity-70 transition hover:text-indigo-500 hover:opacity-100">CV</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="glass rounded-xl px-3 py-1.5 text-sm md:hidden">{open ? '✕' : '☰'}</button>
          </div>
        </nav>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="glass mx-auto mt-2 max-w-6xl space-y-1 rounded-2xl p-3 md:hidden">
            {nav.map((n) => (<li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block rounded-lg px-3 py-2 hover:bg-indigo-500/10">{n}</a></li>))}
          </motion.ul>
        )}
      </header>

      <section id="top" className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-5 pt-28 sm:px-8 md:flex-row md:justify-between">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="text-center md:text-left">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Open to work & internships
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">Hi, I’m <span className="grad-text">{P.name}</span></h1>
          <p className="mt-4 max-w-md text-lg opacity-80 sm:text-xl">{P.title}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} href={P.cv} download className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30">Download CV</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href={P.cv} target="_blank" rel="noreferrer" className="glass rounded-xl px-6 py-3 font-semibold">View CV</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="glass rounded-xl px-6 py-3 font-semibold">Contact me</motion.a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-40 blur-2xl" />
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} className="glass flex h-60 w-60 items-center justify-center overflow-hidden rounded-full p-2 sm:h-80 sm:w-80">
            <img src="/profile.jpg" alt={P.name} style={{ objectPosition: "50% 15%" }} className="h-full w-full rounded-full object-cover" />
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="section">
        <Head k="About" title="Data, code and real-world problems" />
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal className="glass space-y-4 rounded-3xl p-7 md:col-span-2">{P.bio.map((b) => (<p key={b} className="leading-relaxed opacity-90">{b}</p>))}</Reveal>
          <div className="grid gap-4">
            {P.stats.map(([a, b], i) => (<Reveal key={b} delay={i * 0.1} className="glass rounded-2xl p-5"><div className="grad-text text-3xl font-extrabold">{a}</div><div className="text-sm opacity-70">{b}</div></Reveal>))}
          </div>
        </div>
      </section>

      <section id="expertise" className="section">
        <Head k="Expertise" title="Skills & tools" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(([t, items], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <motion.div whileHover={{ y: -6 }} className="glass h-full rounded-2xl p-6">
                <h3 className="mb-4 font-semibold">{t}</h3>
                <div className="flex flex-wrap gap-2">{items.map((s) => (<span key={s} className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-500 dark:text-indigo-300">{s}</span>))}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="roles" className="section">
        <Head k="Open to" title="Roles I’m looking for" />
        <div className="grid gap-5 md:grid-cols-2">
          {roles.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.1} className="glass rounded-3xl p-7">
              <h3 className="mb-4 text-lg font-semibold">{r.t}</h3>
              <ul className="space-y-2">{r.items.map((x) => (<li key={x} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />{x}</li>))}</ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5 flex flex-wrap gap-3">
          {[['Remote', 'bg-emerald-500/15 text-emerald-500'], ['Hybrid', 'bg-sky-500/15 text-sky-500'], [' On-site (select)', 'bg-amber-500/15 text-amber-500']].map(([l, c]) => (<span key={l} className={`rounded-full px-4 py-2 text-sm font-medium ${c}`}>{l}</span>))}
        </Reveal>
      </section>

      <section id="journey" className="section">
        <Head k="Journey" title="Education & learning" />
        <div className="relative ml-3 border-l-2 border-indigo-500/30 pl-8">
          {work.map((w, i) => (
            <Reveal key={w.co} delay={i * 0.1} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-indigo-500 bg-white dark:bg-[#070a14]" />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-lg font-semibold">{w.role}</h3><span className="text-sm text-indigo-500">{w.when}</span></div>
                <p className="mb-3 opacity-70">{w.co}</p>
                <ul className="list-disc space-y-1.5 pl-5 text-sm opacity-90">{w.pts.map((p) => (<li key={p}>{p}</li>))}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <Head k="Selected work" title="Projects" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <motion.div whileHover={{ y: -8, scale: 1.01 }} className="glass group h-full rounded-3xl p-7">
                <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all group-hover:w-24" />
                <h3 className="text-xl font-semibold">{p.n}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{p.d}</p>
                <div className="mt-5 flex flex-wrap gap-2">{p.s.map((s) => (<span key={s} className="rounded-full border border-indigo-500/30 px-3 py-1 text-xs">{s}</span>))}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <Head k="Education" title="Background & certifications" />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-5">
            {edu.map((e, i) => (<Reveal key={e.t} delay={i * 0.1} className="glass rounded-2xl p-6"><h3 className="font-semibold">{e.t}</h3><p className="text-sm text-indigo-500">{e.s}</p><p className="mt-2 text-sm opacity-80">{e.d}</p></Reveal>))}
          </div>
          <Reveal delay={0.1} className="glass rounded-2xl p-6">
            <h3 className="mb-4 font-semibold">Certifications & highlights</h3>
            <ul className="space-y-3 text-sm">{lead.map((l) => (<li key={l} className="flex gap-3"><span className="text-indigo-500">★</span>{l}</li>))}</ul>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section">
        <Head k="Contact" title="Let’s work together" />
        <Reveal className="glass grid gap-6 rounded-3xl p-8 md:grid-cols-2">
          <div className="space-y-4">
            <a href={`mailto:${P.email}`} className="block hover:text-indigo-500">{P.email}</a>
            <a href={`tel:${P.phone.replace(/\s/g, '')}`} className="block hover:text-indigo-500">{P.phone}</a>
            <a href={P.linkedin} target="_blank" rel="noreferrer" className="block hover:text-indigo-500">LinkedIn</a>
            <a href={P.github} target="_blank" rel="noreferrer" className="block hover:text-indigo-500">GitHub</a>
            <p> {P.location}</p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <motion.a whileHover={{ scale: 1.03 }} href={`mailto:${P.email}`} className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-center font-semibold text-white">Send an email</motion.a>
            <a href={P.cv} target="_blank" rel="noreferrer" className="glass rounded-xl px-6 py-3 text-center font-semibold">View CV online</a>
            <a href={P.cv} download className="glass rounded-xl px-6 py-3 text-center font-semibold">Download CV</a>
          </div>
        </Reveal>
        <p className="mt-12 text-center text-sm opacity-60">© {new Date().getFullYear()} {P.name}. Built with Next.js, Tailwind & Framer Motion.</p>
      </section>
    </main>
  );
}
