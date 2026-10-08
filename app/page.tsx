import Image from "next/image";
import Link from "next/link";
import { Icon } from "../components/ui/icon";
import { VertexLogo } from "../components/ui/vertex-logo";
import styles from "./home.module.css";

const courses = [
  { title: "Next.js for Production", description: "Build scalable, high-performance web applications with Next.js.", level: "Intermediate", duration: "18h 24m", modules: "12 modules", mark: "next" },
  { title: "Docker Essentials", description: "Containerize applications and streamline your development workflow.", level: "Beginner", duration: "10h 12m", modules: "8 modules", mark: "docker" },
  { title: "TypeScript Deep Dive", description: "Go beyond the basics and write safer, more expressive code.", level: "Intermediate", duration: "14h 36m", modules: "10 modules", mark: "typescript" },
] as const;

function ArrowRight({ size = 22 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CourseMark({ mark }: { mark: (typeof courses)[number]["mark"] }) {
  if (mark === "next") return <span className={styles.nextMark} aria-hidden="true">N</span>;
  if (mark === "typescript") return <span className={styles.typescriptMark} aria-hidden="true">TS</span>;
  return (
    <svg className={styles.dockerMark} viewBox="0 0 80 72" fill="none" aria-hidden="true">
      <g fill="#2496ed" stroke="#14213d" strokeWidth="1.5">
        <path d="M8 35h54c-2 17-12 28-29 28C18 63 10 53 8 35Z" />
        <path d="M57 35c5-4 7-9 7-15 7 1 10 6 8 12l5 1c-3 6-9 8-17 7Z" />
        <path d="M14 27h8v8h-8zm10 0h8v8h-8zm10 0h8v8h-8zm10 0h8v8h-8zM24 18h8v8h-8zm10 0h8v8h-8zm10 0h8v8h-8zM34 9h8v8h-8zm10 0h8v8h-8z" />
      </g>
      <path d="M19 44c10 5 23 5 33 0" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.viewport}>
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Vertex home"><VertexLogo /></Link>
        <nav className={styles.navigation} aria-label="Main navigation"><a href="#courses">Courses</a><span>My Learning</span></nav>
        <div className={styles.headerRight}>
          <span className={styles.bell} role="img" aria-label="Notifications"><Icon name="bell" size={26} /></span>
          <Image className={styles.avatar} src="/vertex-avatar.png" alt="Learner profile" width={50} height={50} priority />
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-heading">
        <span className={styles.heroBadge}>Intelligent Learning</span>
        <h1 id="hero-heading">Search your learning<br className={styles.desktopBreak} /> in plain English.</h1>
        <p>Vertex understands what you want to learn and<br className={styles.desktopBreak} /> finds the exact lessons across all your courses.</p>
        <a className={styles.explore} href="#courses">Explore Courses <ArrowRight size={24} /></a>
        <div className={styles.searchBox}>
          <Icon name="search" size={29} />
          <input type="search" aria-label="Ask anything about your learning" placeholder="Ask anything about your learning..." />
          <span className={styles.shortcut} aria-hidden="true">⌘ K</span>
        </div>
      </section>

      <section id="courses" className={styles.courses} aria-labelledby="courses-heading">
        <div className={styles.sectionHeading}><h2 id="courses-heading">All Courses</h2><a href="#courses">View all courses <ArrowRight size={19} /></a></div>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <article className={styles.courseCard} key={course.title}>
              <CourseMark mark={course.mark} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className={styles.cardMeta}>
                <span><Icon name="bars" size={16} />{course.level}</span>
                <span><Icon name="clock" size={16} />{course.duration}</span>
                <span><Icon name="file" size={16} />{course.modules}</span>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.weeklyNote}>
          <span className={styles.rule} />
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 2 2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7L5.8 21l1.6-7L2 9.3l7.1-.7L12 2Z" stroke="currentColor" strokeWidth="1.2" /></svg>
          <p>New courses and lessons added every week.</p>
          <span className={styles.rule} />
        </div>
      </section>
      <div className={styles.skyline} aria-hidden="true">
        {[88, 122, 151, 187, 124, 121, 88, 0, 0, 0, 0, 62, 90, 122, 151, 187, 88, 118, 153, 121].map((height, index) => <span key={index} style={{ height }} />)}
      </div>
    </main>
    </div>
  );
}
