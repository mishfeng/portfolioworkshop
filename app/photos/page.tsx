import Image from 'next/image';
import test from 'public/images/test.png';

export const metadata = {
  title: 'Photos',
  description: 'See my photos.',
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

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Photos</h1>
      <div className="my-8 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={test}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={test}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={test}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={test}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={test}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={test}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
