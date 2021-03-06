import Layout from "../components/Layout";
import {getCategories, getClubs} from "../lib/clubs";
import Link from "next/link";
import Club from "../components/Club";
import Heading from "../components/common/Heading";
import Head from "next/dist/next-server/lib/head";

export default function Clubs({clubs, customs, categories}) {
    return (
        <Layout>
            <Head>
                <meta property="og:image" content="https://okayama-univ-fes-git-master.oucrc.vercel.app/committee.jpg"/>
                <meta property="og:description" content="岡山大学大学祭のホームページです" />
            </Head>
            <div className="w-full">
                <div className="ml-auto mr-auto max-w-6xl">
                    <div className="relative mb-6">
                        <div className="z-10 absolute w-3/4 bg-yellow-600 h-full"/>
                        <div className="z-20 relative content-center pl-6 pt-3 pb-3 ml-auto mr-auto">
                            <h1 className="text-xl text-white mt-3 mb-3">部活動・サークル紹介</h1>
                        </div>
                    </div>
                    <Heading text="目次"/>
                    <ul className="mx-3 mb-6">
                        {categories.map(((category) =>
                                <li className="mb-2" key={category.key}>
                                    <Link href={"/clubs#" + category.key}>
                                        <a className="text-blue-600">
                                            {category.value}

                                        </a>
                                    </Link>
                                </li>
                        ))}
                    </ul>
                    <p className="mx-3">アンケートで評価の高かった団体を表彰しますので、企画が良かったと思う団体への応援を込めて、以下のご協力をお願いいたします。</p>
                    <p className="mx-3 mb-5"><Link href={"//forms.gle/F5a2HRD5XSzr3nDs8"}><a className="text-blue-600">アンケートページ</a></Link></p>
                    <p className="text-red-600 mx-3 mb-5">※本学の公認団体については、活動前後の継続的な検温や、アルコール消毒、定期的な換気等、感染症対策を講じた上で活動を行っております。また、動画や写真にはコロナ禍以前に活動していた時のものを含みます</p>
                    {categories.map((category) =>
                        <div id={category.key} key={category.key} className="mb-6">
                            <Heading text={category.value}/>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                                {clubs.filter((club) => club.circle_type === category.key).map((club) =>
                                    <Link href={`/clubs/${customs.includes(club.title_en) ? club.title_en : club.id}`}>
                                        <a>
                                            <li>
                                                <Club club={club}/>
                                            </li>
                                        </a>
                                    </Link>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const clubs = (await getClubs());
    const customs = ['okadaiart','pokemon_club','taekwondo','darken','oucrc','ogmc','shodou']; // 個別対応をしている団体

    return {
        props: {
            clubs: clubs,
            customs: customs,
            categories: getCategories()
        }
    }
}