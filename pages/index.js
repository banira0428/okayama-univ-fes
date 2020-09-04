import MainVisual from "../components/MainVisual";
import Message from "../components/Message";
import Notices from "../components/Notices";
import Contents from "../components/Contents";
import Layout from "../components/Layout";
import MainSlider from "../components/MainSlider";

export default function Index({ contents, notices }) {
    return (
        <Layout>
            <MainVisual />
            <MainSlider />
            <Message />
            <Notices notices={notices} />
            <Contents contents={contents} />
        </Layout>
    )
}

export async function getStaticProps() {

    return {
        props: {
            contents: [
                {
                    "id": 1,
                    "title": "〇〇サークルの紹介"
                },
                {
                    "id": 2,
                    "title": "〇〇部の動画"
                },
                {
                    "id": 3,
                    "title": "〇〇サークルの紹介"
                },
                {
                    "id": 4,
                    "title": "〇〇部の動画"
                }
            ],
            notices: [
                {
                    "id": 1,
                    "title": "1つ目のお知らせです"
                },
                {
                    "id": 2,
                    "title": "2つ目のお知らせです"
                },
            ]
        }
    }
}