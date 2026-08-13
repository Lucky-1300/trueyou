import React from "react";
import { Link } from "react-router-dom";

const navItems = ["About", "How it works", "Community", "Safety"];

const featureCards = [
  { title: "Share", icon: "✎", text: "Express your thoughts and experiences without revealing who you are." },
  { title: "Connect", icon: "💬", text: "Talk with others and discover that you're not alone." },
  { title: "Be You", icon: "◉", text: "No labels. No pressure. Just a space where you can be you." },
];

const items = [
  "Anonymous",
  "Private",
  "Your Choice",
];

function Landing() {
  return (
    <div className="min-h-screen bg-[#f6f3f8] text-[#1f2a44]">
      <header className="mx-auto max-w-[1240px] px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between rounded-full bg-[#f8f5fb] px-5 py-3 shadow-[0_4px_20px_rgba(183,142,255,0.08)]">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute h-7 w-7 rounded-full bg-gradient-to-r from-[#f2a8b5] to-[#b78aff] opacity-90"></div>
              <div className="absolute -left-1 top-0 h-3 w-3 rounded-full bg-[#f5d4eb]"></div>
              <div className="absolute -right-1 bottom-0 h-3 w-3 rounded-full bg-[#ffd9ef]"></div>
              <div className="relative h-4 w-4 rounded-full border-2 border-white bg-white/20"></div>
            </div>
            <div className="text-[2.1rem] font-black leading-none tracking-[-0.06em] text-[#1d2d4f]">
              <span className="text-[#1d2d4f]">True</span>
              <span className="text-[#ee5cb4]">You</span>
            </div>
          </div>

          <div className="hidden items-center gap-9 text-[1.05rem] font-medium text-[#3c4661] md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-[#6b4fe8]">
                {item}
              </a>
            ))}
          </div>

          <Link
            to="/community"
            className="rounded-full bg-gradient-to-r from-[#f96aa8] to-[#7b61ff] px-6 py-3 text-base font-semibold text-white shadow-[0_10px_20px_rgba(154,110,255,0.28)] transition hover:brightness-105"
          >
            Enter Community <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-[1240px] px-6 pb-12 pt-8 lg:px-8">
        <section className="relative overflow-hidden pb-10 pt-6">
          <div className="absolute inset-x-0 top-16 h-[540px] rounded-[50%] bg-gradient-to-r from-[#f7d6e6] via-[#f4d9ff] to-[#d8d8ff] opacity-90 blur-[2px]"></div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:pt-8">
            <div className="z-10">
              <h1 className="max-w-[620px] text-[4rem] font-black leading-[0.95] tracking-[-0.07em] text-[#1d2d4f] lg:text-[6rem]">
                You <span className="text-[#ee5cb4]">don’t</span> have to hide here.
              </h1>

              <p className="mt-6 max-w-[540px] text-[1.1rem] leading-8 text-[#3d4b69]">
                A safe, anonymous space to share your thoughts, connect with people who understand,
                and simply be yourself.
              </p>

              <Link
                to="/community"
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#f96aa8] to-[#7b61ff] px-7 py-4 text-lg font-semibold text-white shadow-[0_12px_24px_rgba(149,97,255,0.25)] transition hover:brightness-105"
              >
                Enter Community <span aria-hidden="true">→</span>
              </Link>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#e7d9ef] bg-white/70 px-4 py-2 text-lg font-semibold text-[#2b3450] shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f3ebff] text-[#7f5af0]">✦</span>
                Your identity. Your choice.
              </div>
            </div>

            <div className="relative z-10 mx-auto flex h-[520px] w-full max-w-[620px] items-end justify-center overflow-visible">
              <div className="absolute bottom-0 left-1/2 h-[360px] w-[500px] -translate-x-1/2 rounded-[46%] bg-gradient-to-r from-[#f7d7ef] via-[#e2d3ff] to-[#d7ebff] opacity-90 blur-[6px]"></div>

              <div className="absolute left-12 top-10 h-20 w-20 rounded-full bg-[#f7d7ef] opacity-80 blur-[1px]"></div>
              <div className="absolute right-16 top-12 h-20 w-20 rounded-full bg-[#cfe3ff] opacity-80 blur-[1px]"></div>
              <div className="absolute left-28 top-10 h-6 w-6 rounded-full bg-[#f4e7ff]"></div>
              <div className="absolute right-20 top-40 h-6 w-6 rounded-full bg-[#f4e7ff]"></div>
              <div className="absolute left-1/2 top-8 h-8 w-8 -translate-x-1/2 rounded-full bg-white/70 shadow-sm"></div>

              <div className="absolute left-14 top-20 flex h-20 w-20 items-center justify-center rounded-[32px] bg-[#f4f4fb] text-3xl shadow-lg">
                💬
              </div>
              <div className="absolute right-10 top-28 flex h-20 w-20 items-center justify-center rounded-[32px] bg-[#f4f4fb] text-3xl shadow-lg">
                ❤
              </div>
              <div className="absolute right-24 top-12 flex h-16 w-16 items-center justify-center rounded-[28px] bg-[#f4f4fb] text-2xl shadow-lg">
                🔒
              </div>

              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-end gap-5">
                <div className="relative">
                  <div className="h-40 w-28 rounded-t-[38px] bg-[#f6b8d6]"></div>
                  <div className="absolute -top-16 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#f7d0de]"></div>
                  <div className="absolute -top-4 left-3 h-6 w-6 rounded-full bg-[#f3ebff]"></div>
                  <div className="absolute -top-4 right-3 h-6 w-6 rounded-full bg-[#f3ebff]"></div>
                  <div className="absolute bottom-16 left-1/2 h-10 w-16 -translate-x-1/2 rounded-full bg-[#5b5fe1]"></div>
                </div>

                <div className="relative">
                  <div className="h-52 w-32 rounded-t-[42px] bg-[#7b7fe8]"></div>
                  <div className="absolute -top-20 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#cbb7ff]"></div>
                  <div className="absolute -top-5 left-3 h-6 w-6 rounded-full bg-[#f4f4fb]"></div>
                  <div className="absolute -top-5 right-3 h-6 w-6 rounded-full bg-[#f4f4fb]"></div>
                  <div className="absolute bottom-20 left-1/2 h-11 w-20 -translate-x-1/2 rounded-full bg-[#5e75d8]"></div>
                </div>

                <div className="relative">
                  <div className="h-44 w-28 rounded-t-[38px] bg-[#f7d7df]"></div>
                  <div className="absolute -top-18 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#f9d2de]"></div>
                  <div className="absolute -top-4 left-3 h-6 w-6 rounded-full bg-[#f3ebff]"></div>
                  <div className="absolute -top-4 right-3 h-6 w-6 rounded-full bg-[#f3ebff]"></div>
                  <div className="absolute bottom-14 left-1/2 h-10 w-16 -translate-x-1/2 rounded-full bg-[#4c6fd7]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10 pt-12">
          <h2 className="text-center text-[3rem] font-black tracking-[-0.06em] text-[#1d2d4f]">
            What TrueYou offers
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <div key={card.title} className="rounded-[28px] border border-[#e9dff0] bg-[#f5f3f7] p-7 shadow-[0_8px_25px_rgba(119,110,155,0.08)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#f9dfe8] to-[#e1d4ff] text-2xl shadow-sm">
                  {card.icon}
                </div>
                <h3 className="mt-6 text-[2.2rem] font-black leading-none tracking-[-0.05em] text-[#1d2d4f]">
                  {card.title}
                </h3>
                <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#f06fb5] to-[#7f5af0]"></div>
                <p className="mt-5 text-[1.08rem] leading-8 text-[#4c5977]">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-12">
          <div className="rounded-[30px] bg-gradient-to-r from-[#f6dfe9] via-[#d6d2ff] to-[#c7d7ff] p-8 shadow-[0_20px_30px_rgba(162,126,255,0.12)] lg:p-10">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div className="flex items-center gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/40 text-[2.1rem] shadow-inner">
                  🔒
                </div>
                <div>
                  <h3 className="text-[2.4rem] font-black tracking-[-0.06em] text-[#1d2d4f]">
                    Your identity belongs to you.
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {items.map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-full border border-white/60 bg-white/35 px-5 py-3 text-lg font-semibold text-[#33456a] shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-base shadow-sm">
                      {label === "Anonymous" ? "◌" : label === "Private" ? "🔒" : "❤"}
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 max-w-[820px] text-[1.16rem] leading-8 text-[#2f3d5d]">
              You decide what you share. TrueYou lets you participate using an anonymous identity,
              so you can express yourself without putting your real identity on display.
            </p>
          </div>
        </section>

        <section className="pb-10 pt-16 text-center">
          <h2 className="mx-auto max-w-[760px] text-[3rem] font-black leading-[1.1] tracking-[-0.06em] text-[#1d2d4f]">
            Ready to say what you’ve been holding inside?
          </h2>
          <p className="mt-5 text-[1.15rem] text-[#4a5572]">
            You don’t need to explain everything. Just start where you are.
          </p>
          <Link
            to="/community"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#f96aa8] to-[#7b61ff] px-8 py-4 text-xl font-semibold text-white shadow-[0_12px_24px_rgba(149,97,255,0.22)] transition hover:brightness-105"
          >
            Enter TrueYou <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <footer className="mx-auto max-w-[1240px] border-t border-[#e9dff0] px-6 pb-8 pt-8 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="absolute h-8 w-8 rounded-full bg-gradient-to-r from-[#f2a8b5] to-[#b78aff]"></div>
              <div className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-[#f5d4eb]"></div>
              <div className="absolute -right-1 bottom-1 h-3 w-3 rounded-full bg-[#ffd9ef]"></div>
              <div className="relative h-4 w-4 rounded-full border-2 border-white bg-white/20"></div>
            </div>
            <div className="text-[2.1rem] font-black leading-none tracking-[-0.06em] text-[#1d2d4f]">
              <span className="text-[#1d2d4f]">True</span>
              <span className="text-[#ee5cb4]">You</span>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-base text-[#49587a] md:flex-row md:gap-16">
            <div>
              <h4 className="mb-3 text-xl font-black text-[#1d2d4f]">Explore</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>How it works</li>
                <li>Community</li>
                <li>Safety</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-black text-[#1d2d4f]">Support</h4>
              <ul className="space-y-2">
                <li>Help Center</li>
                <li>Community Guidelines</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xl font-black text-[#1d2d4f]">Connect</h4>
              <p className="max-w-[220px] leading-8 text-[#49587a]">
                We’re here to build a safer, kinder community together.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-base text-[#667399]">© 2024 TrueYou. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Landing;