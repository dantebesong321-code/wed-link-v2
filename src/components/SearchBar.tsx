import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="relative">
        <FiSearch
          size={20}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-zinc-400
          "
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search vendors..."
          className="
            w-full
            bg-white
            border
            border-zinc-200
            rounded-full
            py-4
            pl-12
            pr-32
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
        />

        <button
          type="button"
          className="
            absolute
            right-2
            top-1/2
            -translate-y-1/2

            bg-black
            text-white

            px-5
            py-2

            rounded-full

            hover:bg-zinc-800
            transition
          "
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;