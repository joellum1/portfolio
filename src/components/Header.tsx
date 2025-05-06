export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center">
      <a href="/" className="text-[1.75rem]">
        <span className="bold">JOEL LUM</span>
      </a>

      <nav>
        <ul className="list-style-none flex flex-row gap-[1.5rem] text-gray-400">
          <li><a href="/">About Me</a></li>
          <li><a href="/">Projects</a></li>
          <li><a href="/">Tech Stack</a></li>
          <li><a href="/">Extracurriculars</a></li>
        </ul>
      </nav>
    </header>
  );
}