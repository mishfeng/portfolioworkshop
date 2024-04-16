export const metadata = {
  title: 'Experience',
  description: 'Read about my professional experience.',
}

function EmailIcon() {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z" fill="currentColor"/></svg>)
}

export default function Page() {
  return (
    <section>
      
      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Experience</h1>
      
      <a
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 mb-6"
        rel="noopener noreferrer"
        target="_blank"
        href="./resume.pdf"
      >
        <EmailIcon></EmailIcon>
        <p className="ml-2 h-6">Resume</p>
      </a>

      <div className="mt-3 mb-6">
        <p className="text-lg font-semibold tracking-tighter green">AggieWorks</p>
        <p className="mb-1">Position</p>
        <p className="mb-1"><i>Month Year - Present</i></p>
        <p>As a member of this club, I build a lot of cool projects and hang out with a lot of cool people. I have learned a lot from being in this club. </p>
      </div>

      <div className="mt-3 mb-6">
        <p className="text-lg font-semibold tracking-tighter green">AggieWorks</p>
        <p className="mb-1">Position</p>
        <p className="mb-1"><i>Month Year - Present</i></p>
        <p>As a member of this club, I build a lot of cool projects and hang out with a lot of cool people. I have learned a lot from being in this club. </p>
      </div>

    </section>
  )
}
