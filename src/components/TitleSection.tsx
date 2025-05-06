import { FlipWords } from "./ui/flip-words";

export default function TitleSection() {
  return (
    <section 
      id="title"
      className="flex flex-col items-center pt-48 pl-24 pr-24 text-[6rem]"
    >
      <div className="flex flex-row items-baseline gap-x-2">
        <h1>Blending</h1>
        <FlipWords
          words={["logic.", "creativity.", "impact."]}
          className="text-blue-600"
        />
      </div>
    </section>
  );
}