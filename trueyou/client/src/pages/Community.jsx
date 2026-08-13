import React from "react";

const sidebarItems = [
  { label: "Home", icon: "🏠", active: true },
  { label: "My Profile", icon: "👤" },
  { label: "Saved Posts", icon: "🗂️" },
  { label: "My Conversations", icon: "💬" },
  { label: "Notifications", icon: "🔔", badge: 3 },
  { label: "Community Guidelines", icon: "📘" },
  { label: "Help Center", icon: "❔" },
  { label: "Settings", icon: "⚙️" },
];

const tags = [
  "All",
  "Identity",
  "Coming Out",
  "Relationships",
  "Family",
  "College & Work",
  "Just Talking",
];

const posts = [
  {
    author: "AnonymousRose",
    time: "1h ago",
    category: "Coming Out",
    text: "I've been thinking about telling my family for months. I don't know if I'm ready yet, but I'm finally starting to accept myself.",
    likes: 24,
    comments: 8,
    emoji: "🌸",
    tint: "bg-pink-100 text-pink-600",
  },
  {
    author: "QuietMoon",
    time: "4h ago",
    category: "Identity",
    text: "Sometimes I wish I could talk to someone who understands what it feels like to be unseen for so long.",
    likes: 31,
    comments: 12,
    emoji: "🌙",
    tint: "bg-violet-100 text-violet-600",
  },
  {
    author: "HiddenButterfly",
    time: "6h ago",
    category: "Just Talking",
    text: "Today was a difficult day, but I'm proud that I made it through.",
    likes: 18,
    comments: 5,
    emoji: "🦋",
    tint: "bg-sky-100 text-sky-600",
  },
];

const chatMessages = [
  { user: "AnonymousMoon", message: "Hey, how are you doing?", mine: false, time: "10:30 AM" },
  { user: "QuietButterfly", message: "I'm okay. It's nice to have someone to talk.", mine: true, time: "10:31 AM" },
  { user: "AnonymousMoon", message: "Yeah, same here. This place really feels safe.", mine: false, time: "10:32 AM" },
  { user: "QuietButterfly", message: "Absolutely. You can share anything without being judged.", mine: true, time: "10:33 AM" },
  { user: "AnonymousMoon", message: "Thank you for listening. Means a lot.", mine: false, time: "10:34 AM" },
];

const trendingTopics = [
  { tag: "#comingout", count: 128, color: "bg-[#f7d8e5] text-[#d94f8a]" },
  { tag: "#selflove", count: 96, color: "bg-[#f5e3ff] text-[#7c5eea]" },
  { tag: "#identity", count: 87, color: "bg-[#dfe8ff] text-[#3d5bd7]" },
  { tag: "#support", count: 76, color: "bg-[#dff9f3] text-[#1aa78d]" },
  { tag: "#anxiety", count: 64, color: "bg-[#fdeccf] text-[#d98928]" },
  { tag: "#pride", count: 58, color: "bg-[#f4dff9] text-[#a450d9]" },
];

function Community() {
  return (
    <div className="min-h-screen bg-[#f5f3f7] text-[#2d3350]">
      <div className="mx-auto max-w-[1460px] px-4 py-6 lg:px-6">
        <div className="grid gap-6 xl:grid-cols-[240px_minmax(0,1fr)_390px]">
          <aside className="rounded-[28px] bg-[#f8f5fa] p-4 shadow-[0_8px_24px_rgba(126,95,165,0.06)]">
            <div className="flex items-center gap-3 px-2 pb-6 pt-2">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#f4a2c2] to-[#a88af7]">
                <div className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-[#f8dfe6]"></div>
                <div className="absolute -right-1 bottom-1 h-3 w-3 rounded-full bg-[#f5d9ee]"></div>
                <div className="h-4 w-4 rounded-full border-2 border-white bg-white/30"></div>
              </div>
              <div className="text-[2.3rem] font-black leading-none tracking-[-0.06em]">
                <span className="text-[#1d2d4f]">True</span>
                <span className="text-[#ee5cb4]">You</span>
              </div>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-[1.1rem] font-medium transition ${
                    item.active
                      ? "bg-[#f7dfe7] text-[#2d3350] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)]"
                      : "text-[#444d69] hover:bg-white/60"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    {item.label}
                  </span>
                  {item.badge ? (
                    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#f090b8] px-2 text-xs font-bold text-white">
                      {item.badge}
                    </span>
                  ) : null}
                </button>
              ))}
            </nav>

            <div className="mt-8 rounded-[24px] bg-gradient-to-r from-[#f6dfe8] to-[#f4eaeb] p-4 shadow-[0_12px_22px_rgba(235,172,198,0.16)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-xl shadow-sm">🔒</div>
                <p className="text-[1.05rem] font-semibold text-[#1e2d4d]">You are participating anonymously</p>
              </div>
              <p className="mt-4 text-[0.98rem] leading-7 text-[#4a5877]">
                Your identity is safe with us. You choose what to share.
              </p>
              <button className="mt-4 text-base font-semibold text-[#2d3350] hover:text-[#6a4be3]">
                Learn more →
              </button>
            </div>
          </aside>

          <main className="rounded-[28px] bg-[#f8f5fa] p-5 shadow-[0_8px_24px_rgba(126,95,165,0.06)]">
            <div className="mb-4 flex items-center justify-between gap-3 rounded-[20px] bg-white/30 px-4 py-3 shadow-[inset_0_0_0_1px_rgba(168,170,210,0.12)]">
              <div className="flex items-center gap-3 text-[#67718f]">
                <span className="text-xl">⌕</span>
                <input
                  value="Find a conversation..."
                  readOnly
                  className="w-full bg-transparent text-base text-[#67718f] outline-none"
                />
              </div>
              <span className="text-xl text-[#7d82b7]">⌕</span>
            </div>

            <div className="rounded-[26px] bg-[#f8f5fa] p-4 shadow-[inset_0_0_0_1px_rgba(168,170,210,0.08)]">
              <div className="flex items-center justify-between">
                <h1 className="text-[2.2rem] font-black leading-none tracking-[-0.06em] text-[#1d2d4f]">
                  Welcome, AnonymousMoon <span className="text-[#f0c54a]">☾</span>
                </h1>
              </div>

              <p className="mt-4 text-[1.05rem] font-medium text-[#49577a]">What’s on your mind today?</p>

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/70 px-3 py-3 text-[#5c6587] shadow-[inset_0_0_0_1px_rgba(168,170,210,0.08)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3ebff] text-sm text-[#7e60ef]">◌</span>
                <span>You are participating anonymously</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <button
                    key={tag}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      index === 0
                        ? "bg-gradient-to-r from-[#f6d7ea] to-[#d9d0ff] text-[#2d3350] shadow-sm"
                        : "bg-white/80 text-[#4b5879] shadow-[inset_0_0_0_1px_rgba(168,170,210,0.08)]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-[22px] border border-[#ede3f3] bg-white/55 p-4 shadow-[0_8px_18px_rgba(148,97,185,0.04)]">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#efb9d7] to-[#c7b0ff] text-lg shadow-sm">
                      🌙
                    </div>
                    <span className="text-lg font-bold text-[#2d3350]">AnonymousMoon</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-[18px] border border-[#efe4f4] bg-[#fbf8fc] px-3 py-3 text-[#647090]">
                  <span className="text-xl">✎</span>
                  <input
                    value="Share something on your mind..."
                    readOnly
                    className="w-full bg-transparent text-[1.02rem] text-[#7a8199] outline-none"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 rounded-full border border-[#ede3f3] bg-[#f4eefb] px-3 py-2 text-sm font-medium text-[#4a5878]">
                    <span>Category</span>
                    <span>⌄</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#f1ecff] px-3 py-2 text-sm font-semibold text-[#514f7a]">
                      Anonymous
                    </div>
                    <button className="rounded-full bg-gradient-to-r from-[#f7a9c1] to-[#8e80f5] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(156,112,255,0.24)]">
                      Share Anonymously
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {posts.map((post) => (
                  <article key={post.author} className="rounded-[24px] border border-[#ece4f4] bg-white/70 p-5 shadow-[0_10px_20px_rgba(162,137,193,0.04)]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-full text-lg shadow-sm ${post.tint}`}>
                          {post.emoji}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[1.08rem] font-black text-[#1d2d4f]">{post.author}</span>
                            <span className="text-[#9da7c0]">◌</span>
                          </div>
                          <div className="mt-1 text-sm text-[#7d86a0]">
                            {post.category} • {post.time}
                          </div>
                        </div>
                      </div>
                      <button className="text-2xl text-[#7b8198]">⋯</button>
                    </div>

                    <p className="mt-5 text-[1.08rem] leading-8 text-[#2f3c5d]">{post.text}</p>

                    <div className="mt-5 flex items-center gap-7 text-[#657291]">
                      <span className="flex items-center gap-2 text-[1.05rem] font-medium">
                        <span className="text-[#f26ca8]">❤</span>
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-2 text-[1.05rem] font-medium">
                        <span className="text-[#7d82b7]">💬</span>
                        {post.comments}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <footer className="mt-10 border-t border-[#e8dff0] pt-8">
              <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#f4a2c2] to-[#a88af7]">
                    <div className="absolute -left-1 top-1 h-2.5 w-2.5 rounded-full bg-[#f8dfe6]"></div>
                    <div className="absolute -right-1 bottom-1 h-2.5 w-2.5 rounded-full bg-[#f5d9ee]"></div>
                    <div className="h-3.5 w-3.5 rounded-full border-2 border-white bg-white/30"></div>
                  </div>
                  <div className="text-[2rem] font-black leading-none tracking-[-0.06em]">
                    <span className="text-[#1d2d4f]">True</span>
                    <span className="text-[#ee5cb4]">You</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6 text-[0.96rem] text-[#56657f] md:flex-row md:gap-12">
                  <div>
                    <h3 className="mb-2 text-xl font-black text-[#1d2d4f]">Explore</h3>
                    <ul className="space-y-2">
                      <li>About</li>
                      <li>How it works</li>
                      <li>Community</li>
                      <li>Safety</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-black text-[#1d2d4f]">Support</h3>
                    <ul className="space-y-2">
                      <li>Help Center</li>
                      <li>Community Guidelines</li>
                      <li>Privacy Policy</li>
                      <li>Terms of Service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </main>

          <aside className="rounded-[28px] bg-[#f8f5fa] p-4 shadow-[0_8px_24px_rgba(126,95,165,0.06)]">
            <div className="flex items-center justify-between border-b border-[#e8dff0] pb-4">
              <div className="flex items-center gap-3">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#f2d0e9] to-[#d5c6ff] text-xl shadow-sm">
                  <span>◌</span>
                </div>
                <div>
                  <div className="text-[1.2rem] font-black text-[#1d2d4f]">AnonymousMoon</div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-[#5c647d]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3acb71]"></span>
                    Online
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#5f6b8d]">
                <button className="text-2xl">✦</button>
                <button className="text-xl">✕</button>
              </div>
            </div>

            <div className="mt-4 rounded-[24px] bg-[#f5f1f9] p-3 shadow-[inset_0_0_0_1px_rgba(168,170,210,0.06)]">
              <div className="mb-3 flex items-center justify-between text-[#4d597a]">
                <span className="text-lg font-bold text-[#2d3350]">Anonymous Chat</span>
                <span className="flex items-center gap-2 text-sm font-medium">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3acb71]"></span>
                  Online
                </span>
              </div>

              <div className="mt-4 space-y-4"> 
                {chatMessages.map((msg, index) => (
                  <div key={`${msg.user}-${index}`} className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}>
                    {!msg.mine && (
                      <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#f2d0e9] to-[#d5c6ff] text-sm shadow-sm">
                        ☾
                      </div>
                    )}
                    <div className={`max-w-[235px] rounded-[18px] px-4 py-3 text-[0.96rem] leading-7 ${
                      msg.mine
                        ? "bg-gradient-to-r from-[#f6d7ec] to-[#d7d0ff] text-[#24314f]"
                        : "bg-white text-[#2d3350] shadow-[inset_0_0_0_1px_rgba(168,170,210,0.08)]"
                    }`}>
                      {!msg.mine && <div className="mb-1 text-[0.75rem] font-semibold text-[#7b88a6]">{msg.user}</div>}
                      <div>{msg.message}</div>
                      <div className={`mt-1 text-[0.7rem] ${msg.mine ? "text-[#5d6281]" : "text-[#8993ad]"}`}>{msg.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-full border border-[#e7dff1] bg-white/80 px-3 py-2 shadow-inner">
                <input
                  value="Write a message..."
                  readOnly
                  className="w-full bg-transparent text-[0.96rem] text-[#7a829d] outline-none"
                />
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#f7a9c1] to-[#8e80f5] text-white shadow-sm">➤</button>
              </div>
            </div>

            <div className="mt-5 rounded-[24px] bg-white/60 p-4 shadow-[0_8px_18px_rgba(148,97,185,0.04)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[1.05rem] font-black text-[#1d2d4f]">
                  <span className="text-[#f26ca8]">🔥</span>
                  Trending Topics
                </div>
                <button className="text-sm font-semibold text-[#6d5ee6]">View all</button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {trendingTopics.map((topic) => (
                  <div key={topic.tag} className={`rounded-xl px-3 py-2 text-center ${topic.color}`}>
                    <div className="text-sm font-bold">{topic.tag}</div>
                    <div className="mt-1 text-xs font-medium opacity-80">{topic.count} posts</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-[24px] bg-gradient-to-r from-[#f4b9d1] via-[#d7ccff] to-[#b9d6ff] p-4 text-[#1d2d4f] shadow-[0_12px_24px_rgba(152,136,255,0.14)]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/40 text-2xl shadow-sm">❤</div>
                <div className="text-[1.15rem] font-black leading-7">We’re here to build a safer, kinder community together.</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Community;
