"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Leaf,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Moon,
  Monitor,
  X,
} from "lucide-react";

type Theme = "light" | "dark" | "default";
type Product = {
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  rating: string;
  image: string;
  badge?: string;
  color: string;
};

const products: Product[] = [
  {
    name: "Telur Ayam Kampung",
    category: "Fresh eggs",
    price: "Rp 28.000",
    oldPrice: "Rp 32.000",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=900&q=85",
    badge: "Best seller",
    color: "bg-[#f4eee2]",
  },
  {
    name: "Ayam Kampung Organik",
    category: "Fresh meat",
    price: "Rp 86.000",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85",
    badge: "Farm fresh",
    color: "bg-[#e9eee2]",
  },
  {
    name: "Paket Bibit Ayam",
    category: "Farm essentials",
    price: "Rp 45.000",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=85",
    color: "bg-[#f2e9dc]",
  },
  {
    name: "Madu Hutan Murni",
    category: "Pantry",
    price: "Rp 54.000",
    oldPrice: "Rp 62.000",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85",
    badge: "Small batch",
    color: "bg-[#eee9d9]",
  },
];

const categories = ["All products", "Fresh eggs", "Fresh meat", "Farm essentials", "Pantry"];

const themeOptions: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "default", label: "Default", Icon: Monitor },
];

export default function Storefront() {
  const [theme, setTheme] = useState<Theme>("default");
  const [activeCategory, setActiveCategory] = useState("All products");
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("pbfarm-theme") as Theme | null;
    const nextTheme = savedTheme && ["light", "dark", "default"].includes(savedTheme) ? savedTheme : "default";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  function applyTheme(nextTheme: Theme) {
    const useDark = nextTheme === "dark" || (nextTheme === "default" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", useDark);
    document.documentElement.style.colorScheme = useDark ? "dark" : "light";
  }

  function changeTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    window.localStorage.setItem("pbfarm-theme", nextTheme);
    applyTheme(nextTheme);
  }

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = activeCategory === "All products" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [activeCategory, searchTerm]);

  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#20251c] transition-colors duration-300 dark:bg-[#171a15] dark:text-[#f3f1e9]">
      <div className="bg-[#243b2b] px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        <span className="mr-2 inline-flex items-center gap-1.5"><Sparkles size={14} className="text-[#d7e99d]" /> Good things grow here.</span>
        <span className="hidden sm:inline">Free delivery on your first order over Rp 150.000</span>
        <a href="#shop" className="ml-2 underline underline-offset-2">Shop now</a>
      </div>

      <header className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex h-[78px] items-center justify-between border-b border-[#e9e7df] dark:border-white/10">
          <a href="#top" className="flex items-center gap-2.5" aria-label="PB Farm home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dce9c4] text-[#345039]"><Leaf size={21} /></span>
            <span className="text-[21px] font-extrabold tracking-[-0.06em]">pb<span className="text-[#739157]">farm</span><span className="ml-1 text-[10px] font-semibold tracking-[0.14em] text-[#868a7d]">CO.</span></span>
          </a>

          <nav className="hidden items-center gap-9 text-sm font-medium text-[#686d61] dark:text-[#c2c6b9] md:flex">
            <a className="text-[#283b2d] dark:text-white" href="#top">Home</a>
            <a className="transition hover:text-[#66834f]" href="#shop">Shop</a>
            <a className="transition hover:text-[#66834f]" href="#story">Our story</a>
            <a className="transition hover:text-[#66834f]" href="#newsletter">Journal</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center rounded-full border border-[#e6e5dc] bg-white/70 p-1 dark:border-white/10 dark:bg-white/5 sm:flex" aria-label="Color theme">
              {themeOptions.map(({ value, label, Icon }) => (
                <button key={value} onClick={() => changeTheme(value)} aria-label={`${label} theme`} aria-pressed={theme === value} title={`${label} theme`} className={`flex h-8 items-center gap-1.5 rounded-full px-2.5 text-xs transition ${theme === value ? "bg-[#283b2d] text-white shadow-sm dark:bg-[#dce9c4] dark:text-[#243226]" : "text-[#75796e] hover:text-[#283b2d] dark:text-[#bec3b5]"}`}>
                  <Icon size={14} /><span className="hidden lg:inline">{label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setSearchOpen(!searchOpen)} className="rounded-full p-2.5 transition hover:bg-black/5 dark:hover:bg-white/10" aria-label="Search products"><Search size={19} /></button>
            <button onClick={() => setCartCount((count) => count + 1)} className="relative rounded-full p-2.5 transition hover:bg-black/5 dark:hover:bg-white/10" aria-label={`Shopping bag, ${cartCount} items`}>
              <ShoppingBag size={19} />
              <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#b8ce91] px-1 text-[10px] font-bold text-[#283b2d]">{cartCount}</span>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-full p-2.5 md:hidden" aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="grid gap-1 border-b border-[#e9e7df] py-3 text-sm dark:border-white/10 md:hidden"><a className="rounded-lg px-3 py-2" href="#top">Home</a><a className="rounded-lg px-3 py-2" href="#shop">Shop</a><a className="rounded-lg px-3 py-2" href="#story">Our story</a><a className="rounded-lg px-3 py-2" href="#newsletter">Journal</a><div className="mt-2 flex gap-2 px-2">{themeOptions.map(({ value, label, Icon }) => <button key={value} onClick={() => changeTheme(value)} className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs ${theme === value ? "border-[#283b2d] bg-[#283b2d] text-white dark:border-[#dce9c4] dark:bg-[#dce9c4] dark:text-[#243226]" : "border-[#e6e5dc] dark:border-white/10"}`}><Icon size={14} />{label}</button>)}</div></nav>}
        {searchOpen && <div className="flex items-center gap-3 border-b border-[#e9e7df] py-3 dark:border-white/10"><Search size={18} className="text-[#828679]" /><input autoFocus value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search the farm shop..." className="w-full bg-transparent text-sm outline-none placeholder:text-[#93968c]" /><button onClick={() => { setSearchOpen(false); setSearchTerm(""); }} aria-label="Close search"><X size={18} /></button></div>}
      </header>

      <section id="top" className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-16 pt-9 sm:px-8 sm:pt-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-14">
        <div className="relative z-10 py-4 lg:py-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dce5ce] bg-[#eff3e8] px-3.5 py-2 text-xs font-semibold tracking-wide text-[#4c6542] dark:border-white/10 dark:bg-white/5 dark:text-[#c6d9ac]"><span className="h-1.5 w-1.5 rounded-full bg-[#8da96b]" /> FROM OUR FARM TO YOUR TABLE</div>
          <h1 className="max-w-[660px] text-[clamp(3.35rem,7vw,6.6rem)] font-medium leading-[.94] tracking-[-0.075em]">A little closer to <span className="font-serif italic text-[#78915d] dark:text-[#b6ca91]">nature.</span></h1>
          <p className="mt-7 max-w-[460px] text-base leading-7 text-[#777a70] dark:text-[#b4b8aa] sm:text-lg sm:leading-8">Good food has a good beginning. We raise, grow, and gather with care—so you can bring a little more goodness home.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#shop" className="inline-flex items-center gap-3 rounded-full bg-[#283b2d] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3b5540] dark:bg-[#dce9c4] dark:text-[#243226] dark:hover:bg-[#c7d9a8]">Explore the shop <ArrowRight size={17} /></a>
            <a href="#story" className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-[#4b5247] transition hover:text-[#78915d] dark:text-[#d1d3c9]">Our way of farming <ArrowDownRight size={16} /></a>
          </div>
          <div className="mt-11 flex items-center gap-4 border-t border-[#e9e7df] pt-6 dark:border-white/10">
            <div className="flex -space-x-2">{["photo-1500595046743-cd271d694d30", "photo-1500382017468-9049fed747ef", "photo-1472396961693-142e6e269027"].map((image) => <img key={image} src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=100&h=100&q=80`} alt="A PB Farm customer" className="h-9 w-9 rounded-full border-2 border-[#faf9f5] object-cover dark:border-[#171a15]" />)}</div>
            <div><div className="text-sm font-bold">Loved by 2,400+ homes</div><div className="mt-0.5 text-xs text-[#85887d]">★★★★★ <span className="ml-1">4.9 / 5 average rating</span></div></div>
          </div>
        </div>

        <div className="relative min-h-[410px] overflow-hidden rounded-[2rem] bg-[#dce5d2] sm:min-h-[520px] lg:min-h-[580px]">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1500&q=90" alt="Sunrise over a green, thriving farm" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2c20]/55 via-transparent to-black/5" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#faf9f5]/90 px-3.5 py-2 text-xs font-semibold text-[#354332] backdrop-blur sm:left-7 sm:top-7"><span className="text-[#7f985e]">✳</span> Grown with intention</div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div><div className="text-xs font-medium uppercase tracking-[.18em] text-white/75">A better kind of everyday</div><div className="mt-2 font-serif text-3xl italic sm:text-4xl">Rooted in goodness.</div></div>
            <a href="#story" aria-label="Discover our story" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 transition hover:bg-white hover:text-[#283b2d]"><ArrowDownRight size={20} /></a>
          </div>
          <div className="absolute bottom-[102px] right-5 rounded-2xl bg-[#faf9f5]/95 p-3.5 text-[#29352a] shadow-lg backdrop-blur sm:bottom-[108px] sm:right-7 sm:p-4"><div className="flex items-center gap-2 text-xs font-semibold"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e7eedc] text-[#627d4d]"><Leaf size={14} /></span> 100% farm raised</div><div className="mt-1 pl-9 text-[11px] text-[#777a70]">Always fresh, never rushed</div></div>
        </div>
      </section>

      <section id="shop" className="bg-[#f0f0e9] py-16 dark:bg-[#1e221b] sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><div className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-[#829268]">A few farm favorites</div><h2 className="text-4xl font-medium tracking-[-.055em] sm:text-5xl">Fresh from the farm<span className="text-[#8da36e]">.</span></h2><p className="mt-3 text-sm text-[#7b7e73] dark:text-[#b4b8aa]">Thoughtfully raised. Happily delivered to your door.</p></div>
            <a href="#shop" className="hidden items-center gap-2 pb-1 text-sm font-semibold text-[#4e6244] hover:gap-3 sm:inline-flex dark:text-[#c6d9ac]">Shop all products <ArrowRight size={16} /></a>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4 border-b border-[#ddded4] dark:border-white/10">
            <div className="flex max-w-full gap-5 overflow-x-auto sm:gap-7">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`shrink-0 border-b-2 pb-3 text-xs font-semibold transition sm:text-sm ${activeCategory === category ? "border-[#526c43] text-[#354b35] dark:border-[#b6ca91] dark:text-[#d8e6c1]" : "border-transparent text-[#898c81] hover:text-[#4c5f43] dark:text-[#aeb2a5]"}`}>{category}</button>)}</div>
            <button className="mb-2 hidden items-center gap-2 rounded-full border border-[#d9dbd1] px-3 py-2 text-xs font-medium text-[#696e62] sm:flex dark:border-white/10 dark:text-[#c2c6b9]"><SlidersHorizontal size={14} /> Filter <ChevronDown size={13} /></button>
          </div>
          {visibleProducts.length ? <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{visibleProducts.map((product) => <article key={product.name} className="group min-w-0">
            <div className={`relative aspect-[.88] overflow-hidden rounded-2xl ${product.color}`}>
              <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              {product.badge && <span className="absolute left-3 top-3 rounded-full bg-[#faf9f5]/95 px-2.5 py-1.5 text-[10px] font-semibold text-[#52634a] sm:left-4 sm:top-4 sm:text-xs">{product.badge}</span>}
              <button onClick={() => setCartCount((count) => count + 1)} className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#faf9f5] text-[#29372b] shadow-md transition hover:scale-105 sm:bottom-4 sm:right-4 sm:h-11 sm:w-11" aria-label={`Add ${product.name} to bag`}><Plus size={19} /></button>
            </div>
            <div className="flex items-center justify-between gap-2 pt-3"><span className="truncate text-[10px] font-medium uppercase tracking-[.12em] text-[#8b8e82] sm:text-xs">{product.category}</span><span className="shrink-0 text-[10px] text-[#8b8e82] sm:text-xs">★ {product.rating}</span></div>
            <h3 className="mt-1.5 text-sm font-semibold sm:text-base">{product.name}</h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-2 text-xs sm:text-sm"><span className="font-bold">{product.price}</span>{product.oldPrice && <span className="text-[#9b9e93] line-through">{product.oldPrice}</span>}</div>
          </article>)}</div> : <div className="py-16 text-center text-sm text-[#777a70]">No farm favorites matched that search. Try another name.</div>}
          <a href="#shop" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4e6244] sm:hidden dark:text-[#c6d9ac]">Shop all products <ArrowRight size={16} /></a>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative h-[330px] overflow-hidden rounded-[1.75rem] bg-[#e7e8dc] sm:h-[440px]"><img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85" alt="Fresh produce gathered at the farm" className="h-full w-full object-cover" /><div className="absolute bottom-4 left-4 rounded-xl bg-[#faf9f5]/90 px-4 py-3 text-xs font-semibold text-[#354332] backdrop-blur">✳ &nbsp;Good things take time</div></div>
        <div className="lg:py-8"><div className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-[#829268]">More than just a farm</div><h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-.06em] sm:text-5xl">We believe the best things are <span className="font-serif italic text-[#78915d] dark:text-[#b6ca91]">grown with care.</span></h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#777a70] dark:text-[#b4b8aa] sm:text-base">From the way we care for our animals to the way we pack each order, every little choice matters. We partner with local growers and keep things honest, seasonal, and close to home.</p><div className="mt-8 grid max-w-lg grid-cols-3 gap-3 border-y border-[#e9e7df] py-5 dark:border-white/10"><div><div className="text-2xl font-semibold tracking-tight">12<span className="text-[#829268]">+</span></div><div className="mt-1 text-[10px] text-[#85887d] sm:text-xs">Local growers</div></div><div><div className="text-2xl font-semibold tracking-tight">100<span className="text-[#829268]">%</span></div><div className="mt-1 text-[10px] text-[#85887d] sm:text-xs">Natural goodness</div></div><div><div className="text-2xl font-semibold tracking-tight">24<span className="text-[#829268]">h</span></div><div className="mt-1 text-[10px] text-[#85887d] sm:text-xs">Fresh delivery</div></div></div><a href="#newsletter" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#4e6244] dark:text-[#c6d9ac]">A little more about us <ArrowRight size={16} /></a></div>
      </section>

      <section id="newsletter" className="bg-[#dfe8d3] px-5 py-14 dark:bg-[#263326] sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><div className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-[#62784d] dark:text-[#c6d9ac]">A note from the farm</div><h2 className="text-3xl font-medium tracking-[-.05em] sm:text-4xl">Fresh news, straight from the field.</h2><p className="mt-2 text-sm text-[#6e7766] dark:text-[#bac4b0]">Seasonal finds, farm stories, and a little goodness in your inbox.</p></div><form onSubmit={(event) => event.preventDefault()} className="flex w-full max-w-[430px] rounded-full border border-[#cbd6bf] bg-[#faf9f5] p-1.5 dark:border-white/15 dark:bg-[#171a15]"><input type="email" required placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-[#92968b]" aria-label="Email address" /><button type="submit" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#283b2d] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#3b5540] sm:px-5 sm:text-sm">Count me in <ArrowRight size={15} /></button></form></div>
      </section>
      <footer className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 px-5 py-7 text-xs text-[#85887d] dark:text-[#aeb2a5] sm:flex-row sm:items-center sm:px-8"><a href="#top" className="flex items-center gap-2 font-bold text-[#394b36] dark:text-[#d8e6c1]"><Leaf size={15} /> pbfarm.co</a><span>Good food, grown close to home. © 2026 PB Farm Co.</span><a href="#top" className="underline underline-offset-4">Back to top</a></footer>
    </main>
  );
}
