import Link from "next/link";
export default function Home() {
  return (
    <div className="items-center h-screen flex justify-center ">
      <Link href="/waiting">
        <button
          className="flex justify-center flex-row align-center select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xl font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Click Here
        </button>
      </Link>
    </div>
  );
}
