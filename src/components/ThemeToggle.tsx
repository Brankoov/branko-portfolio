import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {   //  DEFAULT EXPORT
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className="btn btn--sm"
      aria-label="Byt tema"
      style={{ position: "absolute", top: 16, right: 16, zIndex: 20 }}
    >
      {theme === "dark" ? "☀️ Ljust" : "🌙 Mörkt"}
    </button>
  );
}
