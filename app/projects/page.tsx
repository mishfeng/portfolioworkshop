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

const scoreboardLink = "https://github.com/AggieSportsAnalytics/scoreboard";
const aggieBikeLink = "https://docs.google.com/spreadsheets/d/1vLj68aUiJlqEtZGcMXzTUoP0K8STL_xwKPwVeKy_PfM/edit?usp=sharing";
const hikeLink = "https://github.com/AggieSportsAnalytics/FantasyChatbot";
const aggieExchangeLink = "https://aggieexchange.com";

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Projects</h1>
      <div className="mb-6">
        <p className="text-lg font-semibold tracking-tighter green">ASA Scoreboard</p>
        <p className="mt-1 mb-1"><i>Mar 2024 - Current</i></p>
        <p>A sports product that displays live NBA game statistics on a home scoreboard powered by a Raspberry Pi. Integrating unique statistical calculations and custom hardware components.</p>
        <p className="mt-2">Tools + Languages: <i>Python, Streamlit, Raspberry Pi</i></p>
        <a
          className="flex mt-3 items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={scoreboardLink}
        >
          <ArrowIcon></ArrowIcon>
          <p className="ml-2 h-6">see project</p>
        </a>
      </div>
      <div className="mb-6">
        <p className="text-lg font-semibold tracking-tighter green">aggie.bike</p>
        <p className="mt-1 mb-1"><i>Feb 2024 - Current</i></p>
        <p>An online directory for student bike repairpeople, providing affordable bike repair solutions to UC Davis students.</p>
        <p className="mt-2">Tools + Languages: <i>JavaScript, Node.js</i></p>
        <a
          className="flex mt-3 items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={aggieBikeLink}
        >
          <ArrowIcon></ArrowIcon>
          <p className="ml-2 h-6">see project</p>
        </a>
      </div>
      <div className="mb-6">
        <p className="text-lg font-semibold tracking-tighter green">Hike</p>
        <p className="mt-1 mb-1"><i>Sep 2023 - Feb 2024</i></p>
        <p>A chatbot utilizing LLMs and statistical models for  personalized guidance in Fantasy Football and Basketball</p>
        <p className="mt-2">Tools + Languages: <i>Python, LangChain, Statsmodels, Streamlit</i></p>
        <a
          className="flex mt-3 items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={hikeLink}
        >
          <ArrowIcon></ArrowIcon>
          <p className="ml-2 h-6">see project</p>
        </a>
      </div>
      <div className="mb-6">
        <p className="text-lg font-semibold tracking-tighter green">AggieExchange</p>
        <p className="mt-1 mb-1"><i>Oct 2023 - Feb 2024</i></p>
        <p>A peer-to-peer online marketplace for UC Davis to exchange goods</p>
        <p className="mt-2">Tools + Languages: <i>TypeScript, Node.js, Prisma</i></p>
        <a
          className="flex mt-3 items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href={aggieExchangeLink}
        >
          <ArrowIcon></ArrowIcon>
          <p className="ml-2 h-6">see project</p>
        </a>
      </div>
    </section>
  )
}
