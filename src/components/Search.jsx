import { useRef, useEffect } from "react";

export function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  function callback(e) {
    if (document.activeElement === inputEl.current) return;
    if (e.code === "Enter") {
      inputEl.current.focus();
      setQuery("");
    }
  }

  useEffect(
    function () {
      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery]
  );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
