export const metadata = {
  title: 'Contact',
  description: 'Read about my awards.',
}

const email = "mailto:vnshenoy@ucdavis.edu";
const linkedin = "https://www.linkedin.com/in/shenoyvishal";
const github = "https://www.github.com/vishalshenoy";
const twitter = "https://www.x.com/vishalshenoy_";
const instagram = "https://www.instagram.com/vishalshenoy_";

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Contact</h1>
      <p className="mb-4">If you are interested in connecting, please email me at <a target="_blank" className="link" href={email}>vnshenoy@ucdavis.edu</a></p>
      <p className="mb-4">My professional experience is further listed on my <a target="_blank" className="link" href={linkedin}>LinkedIn</a></p>
      <p className="mb-4">My projects and their code repositories are on my <a target="_blank" className="link" href={github}>GitHub</a></p>
      <p className="mb-4">I occassionally post on <a target="_blank" className="link" href={twitter}>Twitter/X</a> and <a target="_blank" className="link" href={instagram}>Instagram</a></p>
    </section>
  )
}
