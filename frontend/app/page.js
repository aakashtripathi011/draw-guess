
import Link from "next/link";

const features = [
  {
    number: "01",
    icon: "✎",
    title: "DRAW",
    description:
      "Get a random word. Draw it as best as you can. Artistic talent is absolutely optional.",
    rotate: "-rotate-2",
  },
  {
    number: "02",
    icon: "⌕",
    title: "GUESS",
    description:
      "Everyone else tries to figure out what you're drawing. Good luck with that.",
    rotate: "rotate-1",
  },
  {
    number: "03",
    icon: "♜",
    title: "SCORE",
    description:
      "Guess correctly, collect points, and prove your friends know absolutely nothing.",
    rotate: "-rotate-1",
  },
];

const players = [
  { name: "you", color: "#5fa8d3", score: "120 pts" },
  { name: "alex", color: "#e8edf2", score: "90 pts" },
  { name: "mira", color: "#a9c4dc", score: "70 pts" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b192b] text-[#e8edf2] selection:bg-[#5fa8d3] selection:text-[#07111f]">
      {/* Paper grain */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.055]"
        style={{
          backgroundImage:
            "radial-gradient(#c7d7e5 0.6px, transparent 0.6px)",
          backgroundSize: "7px 7px",
        }}
      />

      {/* NAVBAR */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-10">
        <Link
          href="/"
          className="font-mono text-2xl font-black tracking-[-0.08em] md:text-3xl"
        >
          drawadguess<span className="text-[#5fa8d3]">.</span>
        </Link>

        <Link
          href="/login"
          className="border-2 border-[#40556b] bg-[#15263a] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider shadow-[4px_4px_0px_#050c15] transition hover:-translate-y-1 hover:border-[#5fa8d3] hover:shadow-[6px_6px_0px_#050c15] sm:text-sm"
        >
          Play now →
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 md:px-10 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-16">
        {/* Left side */}
        <div className="relative z-10">
          <div className="mb-8 inline-block -rotate-2 border-2 border-[#40556b] bg-[#15263a] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9eb5c9] sm:text-xs">
            draw / guess / laugh
          </div>

          <h1 className="font-mono text-[clamp(3.5rem,11vw,7.5rem)] font-black uppercase leading-[0.81] tracking-[-0.09em]">
            DRAW
            <br />
            <span className="text-[#5fa8d3]">AND</span>
            <br />
            GUESS??<span className="text-[#5fa8d3]">.</span>
          </h1>

          {/* Hand-drawn underline */}
          <svg
            viewBox="0 0 350 28"
            className="mt-5 w-64 max-w-full sm:w-80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 18 Q65 2 115 14 T225 10 T345 5"
              stroke="#5fa8d3"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <p className="mt-7 max-w-md font-mono text-sm leading-7 text-[#c1cfdd] sm:text-base">
            One drawing. Endless wrong answers.
            <br />
            The ultimate party game.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/login"
              className="group inline-flex -rotate-1 items-center gap-3 border-2 border-[#40556b] bg-[#5fa8d3] px-7 py-4 font-mono text-sm font-black text-[#07111f] shadow-[6px_6px_0px_#050c15] transition hover:translate-x-1 hover:-translate-y-1 hover:rotate-0 hover:shadow-[8px_8px_0px_#050c15]"
            >
              START PLAYING
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            <span className="font-mono text-xs text-[#9eb5c9]">
              no art degree required.
            </span>
          </div>

          {/* Handwritten note */}
          <div className="mt-12 hidden -rotate-3 font-mono text-xs leading-6 text-[#5fa8d3] sm:block">
            seriously, your stick figures
            <br />
            will do just fine.
            <span className="ml-2">↗</span>
          </div>
        </div>

        {/* Right side: scrapbook drawing */}
        <div className="relative mx-auto w-full max-w-lg lg:mt-5">
          {/* Floating note */}
          <div className="absolute -right-1 -top-10 z-20 hidden rotate-6 font-mono text-xs leading-5 text-[#5fa8d3] sm:block">
            is it a cat?
            <br />
            a potato?
            <br />
            nobody knows.
          </div>

          {/* Paper sheet */}
          <div className="relative mx-4 rotate-2 border-[3px] border-[#40556b] bg-[#101f32] p-4 shadow-[12px_14px_0px_rgba(0,0,0,0.35)] sm:mx-8 sm:p-6">
            {/* Tape */}
            <div className="absolute -top-5 left-1/2 h-10 w-32 -translate-x-1/2 -rotate-3 bg-[#526b80]/70" />

            <div className="flex items-center justify-between border-b border-dashed border-[#52657a] pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#9eb5c9] sm:text-xs">
              <span>artwork no. 001</span>
              <span>probably a cat</span>
            </div>

            {/* Hand-drawn cat SVG */}
            <div className="px-2 py-5 sm:px-5 sm:py-8">
              <svg
                viewBox="0 0 360 300"
                className="w-full"
                fill="none"
                stroke="#5fa8d3"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="A playful hand-drawn cat"
                role="img"
              >
                {/* Tail */}
                <path d="M247 193 C320 187 329 112 307 69 C296 50 284 69 290 91 C302 125 282 152 256 158" />

                {/* Body */}
                <path d="M91 187 C111 156 151 155 191 168 C232 181 258 218 245 250 L222 250 L211 216 L182 220 L177 252 L145 252 L136 216 L119 251 L92 250 L88 220" />

                {/* Head */}
                <path d="M84 172 L74 100 L125 130 Q151 119 176 131 L215 98 L210 174" />
                <path d="M84 172 C91 207 117 218 151 216 C184 215 206 200 210 174" />

                {/* Eyes */}
                <circle cx="119" cy="164" r="4" fill="#5fa8d3" />
                <circle cx="176" cy="164" r="4" fill="#5fa8d3" />

                {/* Nose and mouth */}
                <path d="M142 177 L151 183 L160 177" />
                <path d="M151 183 L151 191 M151 191 Q140 202 133 193 M151 191 Q162 202 170 193" />

                {/* Whiskers */}
                <path d="M96 179 L53 170 M96 190 L50 193 M200 179 L237 169 M200 190 L242 194" />

                {/* Paws */}
                <path d="M96 250 L111 250 M145 252 L160 252 M177 252 L193 252 M222 250 L237 250" />
              </svg>
            </div>

            <div className="flex items-center justify-between border-t border-dashed border-[#52657a] pt-4 font-mono text-xs">
              <span className="text-[#9eb5c9]">artist: your friend</span>
              <span className="rotate-[-3deg] border border-[#5fa8d3] px-2 py-1 text-[#5fa8d3]">
                masterpiece?
              </span>
            </div>
          </div>

          {/* Floating caption card */}
          <div className="absolute -bottom-8 -right-1 z-20 w-44 -rotate-3 border-2 border-[#52657a] bg-[#15263a] p-4 shadow-[6px_7px_0px_rgba(0,0,0,0.4)] sm:right-0 sm:w-52">
            <div className="absolute -top-3 left-8 h-6 w-16 rotate-2 bg-[#526b80]/70" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#9eb5c9]">
              the actual prompt:
            </p>
            <p className="mt-3 font-mono text-lg font-bold text-[#5fa8d3]">
              "flying spaghetti"
            </p>
            <p className="mt-2 font-mono text-[10px] text-[#c1cfdd]">
              good luck guessing.
            </p>
          </div>

          {/* Arrow doodle */}
          <svg
            viewBox="0 0 100 65"
            className="absolute -bottom-16 left-0 hidden w-24 -rotate-12 md:block"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 8 C25 48 56 54 83 33 M68 30 L84 32 L78 47"
              stroke="#5fa8d3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="border-t-2 border-[#30445a]" />

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#5fa8d3]">
              the instructions
            </p>
            <h2 className="font-mono text-3xl font-black uppercase tracking-tight sm:text-4xl">
              HOW IT WORKS<span className="text-[#5fa8d3]">.</span>
            </h2>
          </div>

          <p className="-rotate-2 font-mono text-xs text-[#9eb5c9]">
            ridiculously simple.
          </p>
        </div>

        <div className="grid gap-8 pt-3 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.number}
              className={`relative border-2 border-[#40556b] bg-[#15263a] p-6 shadow-[5px_6px_0px_rgba(0,0,0,0.3)] transition duration-200 hover:-translate-y-2 hover:rotate-0 ${feature.rotate}`}
            >
              {/* Tape */}
              <div className="absolute -top-4 left-1/2 h-7 w-20 -translate-x-1/2 -rotate-3 bg-[#526b80]/70" />

              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-[#5fa8d3]">
                  {feature.number}
                </span>
                <span className="text-3xl text-[#5fa8d3]">
                  {feature.icon}
                </span>
              </div>

              <h3 className="mt-9 font-mono text-2xl font-black">
                {feature.title}
              </h3>

              <p className="mt-4 font-mono text-sm leading-6 text-[#c1cfdd]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SCOREBOARD / SOCIAL SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="relative border-2 border-[#40556b] bg-[#101f32] p-6 shadow-[8px_8px_0px_rgba(0,0,0,0.3)] sm:p-9">
          <div className="absolute -top-4 left-12 h-7 w-24 -rotate-3 bg-[#526b80]/70" />

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#5fa8d3]">
                friendly competition
              </p>

              <h2 className="mt-4 font-mono text-3xl font-black uppercase leading-tight sm:text-4xl">
                YOUR FRIENDS
                <br />
                CAN'T DRAW.
                <br />
                <span className="text-[#5fa8d3]">PROVE IT.</span>
              </h2>

              <p className="mt-5 max-w-md font-mono text-sm leading-6 text-[#c1cfdd]">
                Gather your people, make questionable artwork, and compete for
                bragging rights.
              </p>
            </div>

            {/* Decorative sample leaderboard */}
            <div className="rotate-1 border-2 border-[#52657a] bg-[#15263a] p-5 shadow-[5px_5px_0px_rgba(0,0,0,0.3)] sm:p-7">
              <div className="mb-5 flex items-center justify-between border-b border-dashed border-[#52657a] pb-4">
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest">
                  the leaderboard
                </h3>
                <span className="text-[#5fa8d3]">↗</span>
              </div>

              <div className="space-y-4">
                {players.map((player, index) => (
                  <div
                    key={player.name}
                    className="flex items-center justify-between border-b border-[#40556b] pb-3 font-mono text-sm last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-[#9eb5c9]">
                        0{index + 1}
                      </span>
                      <span style={{ color: player.color }}>
                        {player.name}
                      </span>
                    </div>
                    <span className="font-bold">{player.score}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 font-mono text-[10px] text-[#9eb5c9]">
                * decorative example scores
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 text-center md:px-10 md:pb-24">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-[#9eb5c9]">
          friends · chaos · questionable art
        </p>

        <h2 className="font-mono text-4xl font-black uppercase tracking-[-0.06em] sm:text-6xl">
          LET THE CHAOS
          <br />
          <span className="text-[#5fa8d3]">BEGIN.</span>
        </h2>

        <Link
          href="/login"
          className="mt-9 inline-flex -rotate-1 items-center gap-3 border-2 border-[#52657a] bg-[#5fa8d3] px-8 py-4 font-mono text-sm font-black text-[#07111f] shadow-[6px_6px_0px_#050c15] transition hover:-translate-y-1 hover:rotate-0 hover:shadow-[8px_8px_0px_#050c15]"
        >
          PLAY WITH FRIENDS <span>→</span>
        </Link>

        <footer className="mt-20 border-t-2 border-[#30445a] pt-7">
          <Link
            href="/"
            className="font-mono text-lg font-black tracking-tight"
          >
            drawadguess<span className="text-[#5fa8d3]">.</span>
          </Link>

          <p className="mt-3 font-mono text-xs text-[#9eb5c9]">
            because normal games are boring.
          </p>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#718397]">
            draw something. guess something. have fun.
          </p>
        </footer>
      </section>
    </main>
  );
}
