export default function AboutSection() {
  return (
    <section 
      id="about"
      className="flex flex-col items-center rounded-2xl bg-blue-700 text-white"
    >
      <div className="w-full p-48 flex flex-row justify-between">
        <ul className="list-style-none max-w-128 flex flex-col gap-16">
          <li>
            <h1 className="text-[3rem]">Degree</h1>
            <p className="text-[1.5rem] opacity-75">Bachelor of Engineering (Honours)</p>
          </li>
          <li>
            <h1 className="text-[3rem]">Major</h1>
            <p className="text-[1.5rem] opacity-75">Software</p>
          </li>
          <li>
            <h1 className="text-[3rem]">University</h1>
            <p className="text-[1.5rem] opacity-75">University of New South Wales</p>
          </li>
          <li>
            <h1 className="text-[3rem]">Current Year</h1>
            <p className="text-[1.5rem] opacity-75">3rd Year</p>
          </li>
          <li>
            <h1 className="text-[3rem]">Expected Graduation</h1>
            <p className="text-[1.5rem] opacity-75">December of 2026</p>
          </li>
        </ul>

        <div>Image goes here</div>
      </div>
    </section>
  );
}