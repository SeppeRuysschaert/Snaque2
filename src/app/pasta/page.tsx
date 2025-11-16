// app/pasta/page.tsx
import Pasta from "@/components/pasta/Pasta";
import { PASTA_LIST } from "@/data/pasta";
import Link from "next/link";

export default function PastaPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 space-y-10">
      <section>
        <h1 className="text-2xl font-semibold text-slate-100">Sauzen</h1>

        {/* Subtiele maar duidelijke event-info */}
        <p className="mt-2 text-sm text-slate-300">
          📅 Het pasta-evenement vindt plaats op{" "}
          <span className="font-medium text-slate-100">
            maandag 8 december van 16u tot 19u
          </span>
          . Zorg dat je bestelling tijdig binnen is.
        </p>

        <ul className="mt-4 grid sm:grid-cols-2 gap-4">
          {PASTA_LIST.map((p) => (
            <Pasta key={p.id} item={p} />
          ))}
        </ul>

        <div className="pt-4 flex justify-end">
          <Link
            href="/pasta/add"
            className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold bg-amber-500 text-black ring-1 ring-amber-400/60 hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            Pasta bestellen
          </Link>
        </div>
      </section>
    </main>
  );
}
