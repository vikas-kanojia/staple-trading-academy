import React, { useEffect, useState } from "react";
import {
  academy, nav, stats, pillars, curriculum, features,
  trainer, course, reviews, faqs,
} from "./data.js";

const wa = (text) =>
  `https://wa.me/${academy.phoneIntl}?text=${encodeURIComponent(text)}`;

function Logo() {
  return (
    <a href="#home" className="logo" aria-label={academy.name}>
      <svg viewBox="0 0 40 40" width="36" height="36" aria-hidden="true">
        <rect width="40" height="40" rx="9" fill="var(--navy)" />
        <path d="M8 27l8-8 5 5 11-12" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 12h6v6" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>
        <strong>Staple Trading</strong>
        <small>Academy</small>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-in">
        <Logo />
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <a className="btn btn-primary nav-cta" href={`tel:${academy.phone}`}>Call {academy.phone}</a>
        </nav>
        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-in">
        <div className="hero-copy">
          <p className="eyebrow">Stock market education · Vasai West</p>
          <h1>Learn to invest and trade with <em>confidence</em>, not guesswork.</h1>
          <p className="lead">
            A 2-month, mentor-led program for beginners, taught live by an NSE Certified Technical
            Analyst. Build real skills in charting, investing and risk control.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={wa("Hi, I would like to know about the upcoming batch at Staple Trading Academy.")}>
              Check upcoming batch
            </a>
            <a className="btn btn-ghost" href="#program">View the program</a>
          </div>
          <p className="fine">{academy.tagline}</p>
        </div>

        <aside className="hero-card" aria-label="Course snapshot">
          <p className="card-tag">Beginner program</p>
          <h2>Investing &amp; Trading in the Stock Market</h2>
          <ul className="ticks">
            <li>2-month comprehensive program</li>
            <li>Live sessions + recordings</li>
            <li>Trade on Zerodha Kite under guidance</li>
            <li>Limited seats each batch</li>
          </ul>
          <div className="card-foot">
            <span>Course fee</span>
            <strong>{course.fee}</strong>
          </div>
        </aside>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {sub && <p className="lead">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead
          eyebrow="About the academy"
          title="More than market learning. A journey in personal finance."
          sub="At Staple Trading Academy you gain the knowledge and skills needed to transform your financial future, guided one-on-one by a practising analyst."
        />
        <div className="grid-3">
          {pillars.map((p, i) => (
            <article className="card" key={p.title}>
              <span className="num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Program() {
  return (
    <section id="program" className="section section-tint">
      <div className="container">
        <SectionHead
          eyebrow="Training modules"
          title="A clear 8-week path from basics to live practice"
          sub="Structured so each week builds on the last. Final module outline is shared when you enrol."
        />
        <ol className="timeline">
          {curriculum.map((c) => (
            <li key={c.title}>
              <span className="week">{c.week}</span>
              <h3>{c.title}</h3>
              <ul>
                {c.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </li>
          ))}
        </ol>

        <div className="grid-4">
          {features.map((f) => (
            <article className="card slim" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>

        <div className="fee">
          <div>
            <p className="eyebrow light">Course fee</p>
            <p className="fee-amt">{course.fee}<span> /-</span></p>
            <p className="fee-sub">{course.duration}</p>
            <ul className="chips">
              {course.includes.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div className="fee-cta">
            <p>Seats are limited each batch. Reach out today to check upcoming batch dates and secure your seat.</p>
            <a className="btn btn-light" href={wa("Hi, I want to enrol in the 2-month program. Please share batch dates.")}>
              Secure your seat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trainer() {
  return (
    <section id="trainer" className="section">
      <div className="container trainer">
        <div className="avatar" aria-hidden="true">VP</div>
        <div>
          <p className="eyebrow">Meet your trainer</p>
          <h2>{trainer.name}</h2>
          <p className="role">{trainer.role} · {trainer.org}</p>
          <p className="lead">{trainer.bio}</p>
          <blockquote>“{trainer.quote}”</blockquote>
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>;
}

function Reviews() {
  return (
    <section id="reviews" className="section section-tint">
      <div className="container">
        <SectionHead eyebrow="Student voices" title="Rated 4.9 by 74 students on Google" />
        <div className="grid-2">
          {reviews.map((r) => (
            <figure className="review" key={r.name}>
              <Stars />
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <span className="dot">{r.name[0]}</span>
                <span><strong>{r.name}</strong><small>{r.when} · Google review</small></span>
              </figcaption>
            </figure>
          ))}
          <div className="review review-cta">
            <p>Read all reviews or share your own experience.</p>
            <a className="btn btn-primary" href={`https://www.google.com/maps/search/${encodeURIComponent(academy.mapsQuery)}`} target="_blank" rel="noreferrer">
              See reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container narrow">
        <SectionHead eyebrow="Questions" title="Frequently asked" />
        <div className="faq">
          {faqs.map((f, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={f.q}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}<span aria-hidden="true">{open === i ? "–" : "+"}</span>
              </button>
              {open === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi, I am ${form.name} (${form.phone}). ${form.message || "I would like to know about the next batch."}`;
    window.open(wa(msg), "_blank", "noopener");
  };

  return (
    <section id="contact" className="section section-navy">
      <div className="container contact">
        <div>
          <p className="eyebrow light">Contact us</p>
          <h2>Start your financial journey</h2>
          <p className="lead light">Call, message or visit us. We will share current batch dates and answer your questions.</p>
          <ul className="contact-list">
            <li><span>Phone</span><a href={`tel:${academy.phone}`}>{academy.phone}</a></li>
            <li><span>WhatsApp</span><a href={wa("Hi")}>Chat now</a></li>
            <li><span>Website</span><a href={`https://${academy.website}`}>{academy.website}</a></li>
            <li><span>Address</span><address>{academy.address}</address></li>
          </ul>
        </div>

        <form className="form" onSubmit={submit}>
          <h3>Request a call back</h3>
          <label>Your name
            <input required value={form.name} onChange={set("name")} autoComplete="name" />
          </label>
          <label>Phone number
            <input required type="tel" pattern="[0-9+ ]{10,15}" value={form.phone} onChange={set("phone")} autoComplete="tel" />
          </label>
          <label>Message (optional)
            <textarea rows="3" value={form.message} onChange={set("message")} />
          </label>
          <button className="btn btn-primary" type="submit">Send on WhatsApp</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} {academy.name}. All rights reserved.</p>
        <p className="disclaimer">
          Investing and trading in securities involve market risk. Education provided is for learning
          purposes only and is not investment advice or a promise of returns.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Trainer />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a className="float-call" href={`tel:${academy.phone}`} aria-label="Call us">Call</a>
    </>
  );
}
