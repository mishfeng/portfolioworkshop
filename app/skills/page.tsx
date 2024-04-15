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
        <p>Python &#x2022; C &#x2022; C++ &#x2022; C# &#x2022; JavaScript &#x2022; TypeScript &#x2022; HTML &#x2022; Swift &#x2022; SQL </p>
      </div>
      <div className="mt-3 mb-6 green">
        <p className="text-lg font-semibold tracking-tighter green">Libraries/Tools</p>
        <p>Tensorflow &#x2022; Keras &#x2022; SciKitLearn &#x2022; Pandas &#x2022; LangChain &#x2022; OpenAI API &#x2022; Next.js &#x2022; React &#x2022; Git &#x2022; Unity &#x2022; Xcode </p>
      </div>
      <div className="mt-3 mb-6 green">
        <p className="text-lg font-semibold tracking-tighter green">Workflows</p>
        <p>Web Development &#x2022; Mobile App Development &#x2022; Game Development &#x2022; Computer Vision &#x2022; Applied Artificial Intelligence</p>
      </div>
    </section>
  )
}
