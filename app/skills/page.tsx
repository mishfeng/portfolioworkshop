export const metadata = {
  title: 'Skills',
  description: 'Read about my skills.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Skills</h1>
      <div className="mt-3 mb-6 green">
        <p className="text-lg font-semibold tracking-tighter green">Languages</p>
        <p>Language 1 &#x2022; Language 2 &#x2022; add more languages </p>
      </div>
      <div className="mt-3 mb-6 green">
        <p className="text-lg font-semibold tracking-tighter green">Libraries/Tools</p>
        <p>Library 1 &#x2022; Library 2 &#x2022; add more libraries </p>
      </div>
      <div className="mt-3 mb-6 green">
        <p className="text-lg font-semibold tracking-tighter green">Workflows</p>
        <p>Workflow 1 &#x2022; Workflow 2 &#x2022; add more workflows </p>
      </div>
    </section>
  )
}
