import {
  Armchair,
  Building2,
  CarFront,
  CarTaxiFront,
  DoorOpen,
  Flower2,
  Globe,
  Landmark,
  LayoutDashboard,
  MapPin,
  ScanFace,
  Search,
  ShieldCheck,
  BedDouble,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/data/portfolio";

type Motif = Project["motif"];
type Layout =
  | "dashboard"
  | "table"
  | "kanban"
  | "portal"
  | "landing"
  | "map"
  | "booking"
  | "mobile"
  | "gallery";

const icons: Record<Motif, LucideIcon> = {
  shield: ShieldCheck,
  grid: LayoutDashboard,
  map: MapPin,
  booking: BedDouble,
  tax: Landmark,
  building: Building2,
  mobile: ScanFace,
  car: CarFront,
  wellness: Flower2,
  taxi: CarTaxiFront,
  furniture: Armchair,
  door: DoorOpen,
  web: Globe,
};

const layouts: Record<Motif, Layout> = {
  shield: "dashboard",
  grid: "table",
  building: "kanban",
  tax: "portal",
  web: "landing",
  map: "map",
  car: "map",
  booking: "booking",
  wellness: "booking",
  taxi: "booking",
  mobile: "mobile",
  furniture: "gallery",
  door: "gallery",
};

const accents: Record<Motif, [string, string]> = {
  shield: ["#a3193f", "#e0287d"],
  grid: ["#7a1230", "#ff5fa8"],
  building: ["#4a0b1d", "#e0287d"],
  mobile: ["#a3193f", "#ff5fa8"],
  map: ["#7a1230", "#e0287d"],
  booking: ["#a3193f", "#ff5fa8"],
  tax: ["#4a0b1d", "#a3193f"],
  web: ["#7a1230", "#ff5fa8"],
  car: ["#a3193f", "#e0287d"],
  wellness: ["#7a1230", "#ff8cc3"],
  taxi: ["#4a0b1d", "#e0287d"],
  furniture: ["#7a1230", "#e0287d"],
  door: ["#4a0b1d", "#ff5fa8"],
};

const block = "rounded-md bg-white/[0.07]";

function Dashboard() {
  return (
    <div className="flex h-full gap-2 p-3">
      <div className="flex w-[18%] flex-col gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-3 ${block} ${i === 1 ? "!bg-magenta/50" : ""}`} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-10 ${block} p-1.5`}>
              <div className="h-1.5 w-1/2 rounded bg-white/20" />
              <div className="mt-2 h-2.5 w-3/4 rounded bg-magenta/50" />
            </div>
          ))}
        </div>
        <div className={`flex-1 ${block} space-y-1.5 p-2`}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex gap-2">
              <div className="h-2 w-1/5 rounded bg-white/15" />
              <div className="h-2 flex-1 rounded bg-white/10" />
              <div className="h-2 w-6 rounded bg-magenta/40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Table() {
  const widths = ["w-3/4", "w-1/2", "w-2/3", "w-3/5", "w-4/5"];
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-4 w-14 rounded-full ${i === 0 ? "bg-magenta/60" : "bg-white/10"}`}
          />
        ))}
        <div className="ml-auto h-4 w-16 rounded-full bg-white/10" />
      </div>
      <div className={`flex-1 ${block} space-y-1.5 p-2`}>
        {widths.map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/20" />
            <div className={`h-2 ${w} rounded bg-white/15`} />
            <div
              className={`ml-auto h-2.5 w-9 rounded-full ${
                i % 3 === 0 ? "bg-magenta/50" : i % 3 === 1 ? "bg-white/20" : "bg-burgundy-light/60"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Kanban() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-3">
      {[3, 2, 2].map((count, col) => (
        <div key={col} className={`flex flex-col gap-1.5 ${block} p-1.5`}>
          <div className={`h-2 w-1/2 rounded ${col === 0 ? "bg-magenta/60" : "bg-white/25"}`} />
          {Array.from({ length: count }, (_, i) => (
            <div key={i} className="rounded bg-white/[0.08] p-1.5">
              <div className="h-1.5 w-4/5 rounded bg-white/25" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/12" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Portal() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="flex h-[42%] items-end rounded-md bg-gradient-to-r from-burgundy/70 to-magenta/30 p-2">
        <div className="space-y-1.5">
          <div className="h-2.5 w-24 rounded bg-white/50" />
          <div className="h-1.5 w-36 rounded bg-white/25" />
        </div>
      </div>
      <div className="grid flex-1 grid-cols-4 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`flex flex-col items-center justify-center gap-1.5 ${block}`}>
            <div className="h-4 w-4 rounded-full bg-magenta/50" />
            <div className="h-1.5 w-3/5 rounded bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="flex flex-1 items-center gap-3">
        <div className="flex-1 space-y-2">
          <div className="h-3 w-4/5 rounded bg-white/45" />
          <div className="h-3 w-3/5 rounded bg-white/30" />
          <div className="h-1.5 w-full rounded bg-white/12" />
          <div className="h-5 w-16 rounded-full bg-magenta/60" />
        </div>
        <div className="aspect-square h-[85%] rounded-full bg-gradient-to-br from-magenta/50 to-burgundy/40 blur-[1px]" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`h-7 ${block}`} />
        ))}
      </div>
    </div>
  );
}

function MapLayout() {
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          transform: "rotate(-8deg) scale(1.3)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 120" fill="none" aria-hidden>
        <path d="M10 95 C 50 80, 70 30, 120 50 S 170 30, 195 20" stroke="#ff5fa8" strokeWidth="2" strokeDasharray="4 4" opacity=".7" />
      </svg>
      <MapPin className="absolute left-[18%] top-[62%] text-magenta-soft" size={20} />
      <MapPin className="absolute left-[58%] top-[34%] text-magenta" size={24} />
      <MapPin className="absolute left-[84%] top-[14%] text-magenta-soft" size={18} />
      <div className="glass absolute bottom-3 left-3 w-1/3 rounded-lg p-2">
        <div className="h-1.5 w-2/3 rounded bg-white/30" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/15" />
      </div>
    </div>
  );
}

function Booking() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="glass flex items-center gap-2 rounded-full px-3 py-1.5">
        <Search size={11} className="text-white/50" />
        <div className="h-1.5 w-1/3 rounded bg-white/25" />
        <div className="ml-auto h-3 w-10 rounded-full bg-magenta/60" />
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`flex flex-col gap-1.5 ${block} p-1.5`}>
            <div className="flex-1 rounded bg-gradient-to-br from-burgundy/60 to-magenta/30" />
            <div className="h-1.5 w-3/4 rounded bg-white/25" />
            <div className="h-1.5 w-1/2 rounded bg-white/12" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="grid h-full place-items-center">
      <div className="glass relative flex h-[88%] aspect-[9/17] flex-col items-center justify-center gap-2 rounded-2xl border-white/20 p-2">
        <div className="absolute top-1.5 h-1 w-5 rounded-full bg-white/25" />
        <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-dashed border-magenta-soft/70">
          <ScanFace size={22} className="text-magenta-soft" />
        </div>
        <div className="h-1.5 w-2/3 rounded bg-white/25" />
        <div className="h-4 w-3/4 rounded-full bg-magenta/60" />
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-3">
      <div className="flex flex-col gap-2">
        <div className="h-3/5 rounded-md bg-gradient-to-br from-burgundy/70 to-magenta/30" />
        <div className="flex-1 rounded-md bg-white/[0.07]" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex-1 rounded-md bg-white/[0.07]" />
        <div className="h-3/5 rounded-md bg-gradient-to-tr from-magenta/40 to-burgundy/60" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-2/5 rounded-md bg-gradient-to-br from-magenta/30 to-burgundy/50" />
        <div className="flex-1 rounded-md bg-white/[0.07]" />
      </div>
    </div>
  );
}

/**
 * A stylised, CSS-only visual for a project. These are abstract illustrations,
 * not screenshots of the real products.
 */
export default function ProjectMockup({
  motif,
  className = "",
}: {
  motif: Motif;
  className?: string;
}) {
  const Icon = icons[motif];
  const [c1, c2] = accents[motif];
  const layout = layouts[motif];

  return (
    <div
      aria-hidden
      className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 ${className}`}
      style={{
        background: `radial-gradient(circle at 15% 0%, ${c1}cc, transparent 60%), radial-gradient(circle at 100% 100%, ${c2}55, transparent 55%), #0d0a12`,
      }}
    >
      <div className="flex h-6 items-center gap-1.5 border-b border-white/10 bg-black/25 px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        <span className="ml-3 h-2 w-1/3 rounded-full bg-white/10" />
      </div>
      <div className="relative h-[calc(100%-1.5rem)]">
        {layout === "dashboard" && <Dashboard />}
        {layout === "table" && <Table />}
        {layout === "kanban" && <Kanban />}
        {layout === "portal" && <Portal />}
        {layout === "landing" && <Landing />}
        {layout === "map" && <MapLayout />}
        {layout === "booking" && <Booking />}
        {layout === "mobile" && <Mobile />}
        {layout === "gallery" && <Gallery />}
        <Icon
          className="absolute bottom-2 right-3 text-white/15"
          size={64}
          strokeWidth={1.2}
        />
      </div>
      <span className="absolute bottom-1.5 left-3 text-[9px] uppercase tracking-widest text-white/30">
        Illustrative visual
      </span>
    </div>
  );
}
