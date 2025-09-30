import { FlipWords } from "./ui/flip-words";

export default function TitleSection() {
  return (
    <section 
      id="title"
      className="flex flex-col items-center rounded-2xl"
    >
      <div className="flex flex-row items-baseline gap-x-4 text-[6rem] mt-48 mb-48 pl-24 pr-24">
        <h1>Bringing</h1>
        <FlipWords
          words={["innovation.", "impact.", "inspiration."]}
          className="text-blue-700"
        />
      </div>

      <div className="w-full bg-[#efefef] rounded-2xl p-24 text-[1.25rem]">
        <p className="text-[2rem]">
          👋 Hi, I'm a third-year Software Engineering student at UNSW, passionate about driving change through technology. 
          In my strive towards that goal, I'm constantly learning, whether it's through university, personal projects, or collaborating with others to solve real-world problems.
        </p>
      </div>
    </section>
  );
}