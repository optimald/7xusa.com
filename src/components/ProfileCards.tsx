import Link from 'next/link'

interface Profile {
  id: number
  name: string
  description: string
  image: string
  link: string
  slug: string
}

const profiles: Profile[] = [
  {
    id: 835,
    name: "June Zhu",
    description: "Revoluntionary Mental health mobile app to quickly and effectively help people with anxiety, depression and low self-esteem",
    image: "/images/avatars/835/646e8179ee078-bpfull.jpg",
    link: "https://7xusa.com/members/june/",
    slug: "june"
  },
  {
    id: 834,
    name: "Casey Pehrson",
    description: "We design and make Near Ear Audio systems for outdoor recreational athletes.",
    image: "/images/avatars/834/6467bab7009a1-bpfull.png",
    link: "https://7xusa.com/members/caseyp/",
    slug: "caseyp"
  },
  {
    id: 263,
    name: "Desiree Blanchard",
    description: "I will bring the salon to you, and you can have amazing hair anywhere anytime (except after 7pm). Whether it be dimensional blonde, dark chocolate brown or a fun haircut I can do it.",
    image: "/images/avatars/263/61b02e63ef190-bpfull.png",
    link: "https://7xusa.com/members/dezi/",
    slug: "dezi"
  },
  {
    id: 274,
    name: "Mike Agrelius",
    description: "HVP creates & publishes fun, educational children's books & games that kids, parents, grandparents, teachers & homeschoolers enjoy",
    image: "/images/avatars/274/63298fa62879b-bpfull.jpg",
    link: "https://7xusa.com/members/mike_agrelius/",
    slug: "mike_agrelius"
  },
  {
    id: 826,
    name: "Christoph Heinrich",
    description: "Zero Emission Lawn Care",
    image: "/images/avatars/826/6436c78c44ead-bpfull.jpg",
    link: "https://7xusa.com/members/blueplanet/",
    slug: "blueplanet"
  },
  {
    id: 419,
    name: "Britton Mathews",
    description: "Veedback is video word-of-mouth marketing in one click. We are a B2B SaaS platform where e-commerce retailers can collect, manage and leverage video reviews into new sales using this social proof on their product pages.",
    image: "/images/avatars/419/62b4e92b14994-bpfull.png",
    link: "https://7xusa.com/members/veedback/",
    slug: "veedback"
  },
  {
    id: 636,
    name: "Dawn Wellott",
    description: "This is a platform that enables communication and trust to support the new gig economy workforce. We meet US based women where they are and inform them of this new work option.",
    image: "/images/avatars/636/633b0d532c64e-bpfull.jpg",
    link: "https://7xusa.com/members/smartmomgig/",
    slug: "smartmomgig"
  },
  {
    id: 776,
    name: "Joel McKay Smith",
    description: "Serving Companies. Transforming Communities. Changing Lives. Accelerant works with urban and rural communities creating significant social impact and client business advantages.",
    image: "/images/avatars/776/63b6d81391768-bpfull.png",
    link: "https://7xusa.com/members/joelmeisterslc/",
    slug: "joelmeisterslc"
  },
  {
    id: 649,
    name: "Nathan Byrd",
    description: "Business Consulting, Marketing Strategy and Content Creation.",
    image: "/images/avatars/649/63487a609c95d-bpfull.png",
    link: "https://7xusa.com/members/nathanbyrd/",
    slug: "nathanbyrd"
  },
  {
    id: 405,
    name: "Esther Imotan",
    description: "Chicago's First Female Minority owner operated Barbershop/Parlour. Everyone is welcome",
    image: "/images/avatars/405/629e08f4281ed-bpfull.png",
    link: "https://7xusa.com/members/esther/",
    slug: "esther"
  },
  {
    id: 731,
    name: "Kathy White",
    description: "Are you bored with team building games? Do you miss talking to 3d humans. VR Waffles is reimagining team building games in a virtual reality world.",
    image: "/images/avatars/731/63755c1027d5e-bpfull.jpg",
    link: "https://7xusa.com/members/kathywhite/",
    slug: "kathywhite"
  },
  {
    id: 820,
    name: "Ericandre Anjounique",
    description: "Massage Therapy Matters offers on-site massage services to help reduce stress, tension, and pain for staff and crew.",
    image: "/images/avatars/820/641739fde95f6-bpfull.jpg",
    link: "https://7xusa.com/members/massagetherapy/",
    slug: "massagetherapy"
  },
  {
    id: 448,
    name: "Shawn Grant",
    description: "We are a full service digital marketing agency that specializes in helping small to medium sized businesses grow their online presence and increase their revenue.",
    image: "/images/avatars/448/62e955cbefb58-bpfull.jpg",
    link: "https://7xusa.com/members/shawn/",
    slug: "shawn"
  }
]

export default function ProfileCards() {
  // Show all profiles (no filtering for now)
  const filteredProfiles = profiles
  return (
    <div id="vvc-startup-list">
      <div className="stacked-slider swiper-container">
        <ul className="swiper-wrapper">
          {filteredProfiles.map((profile) => (
            <li key={profile.id} className="swiper-slide" data-bp-startup-id={profile.id}>
              <img
                src={profile.image}
                alt={`Profile photo of ${profile.name}`}
                className={`user-${profile.id}-avatar avatar-500 photo`}
                width="500"
                height="500"
              />
              <h3>
                <Link href={`/members/${profile.slug}`}>{profile.name}</Link>
              </h3>
              <p>{profile.description}</p>
              <div className="footer_actions"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 