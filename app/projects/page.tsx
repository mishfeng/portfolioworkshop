export const metadata = {
  title: 'Projects',
  description: 'Read about my professional projects.',
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const link1 = "#";
const link2 = "#";

export default function Page() {
  return (
    <section>

      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Projects</h1>
      
      <div className="mb-6">
        <p className="text-lg font-semibold tracking-tighter green">Project Number 1</p>
        <p className="mt-1 mb-1"><i>Month Year - Current</i></p>
        <p>This is a really interesting project that is super awesome! I worked really hard on this project and you should read about it.</p>
        <p className="mt-2">Tools + Languages: <i>put some of the project languages/skills here</i></p>
        <a
          className="flex mt-3 items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={link1}
        >
          <ArrowIcon></ArrowIcon>
          <p className="ml-2 h-6">see project</p>
        </a>
      </div>

      <div className="mb-6">
        <p className="text-lg font-semibold tracking-tighter green">Project Number 1</p>
        <p className="mt-1 mb-1"><i>Month Year - Month Year</i></p>
        <p>This is a really interesting project that is super awesome! I worked really hard on this project and you should read about it.</p>
        <p className="mt-2">Tools + Languages: <i>put some of the project languages/skills here</i></p>
        <a
          className="flex mt-3 items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={link2}
        >
          <ArrowIcon></ArrowIcon>
          <p className="ml-2 h-6">see project</p>
        </a>
      </div>
      
    </section>
  )
}
