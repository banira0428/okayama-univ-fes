import Slider from "react-slick";
import React, {Component} from "react";
import Link from "next/link";

export default class SimpleSlider extends Component {
    render() {
        const contents = [
            {
                title: "団体企画",
                image: "/projects.jpg",
                link: "/projects"
            },
            {
                title: "部活動、サークル紹介",
                image: "/clubs.jpg",
                link: "/clubs"
            },
            {
                title: "実行委員会",
                image: "/committee.jpg",
                link: "/committee"
            },

        ];

        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="mb-12 relative">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {
                        contents.map((content) =>
                            <Link href={content.link}>
                                <a key={content.title}>
                                    <div className="relative h-full">
                                        <img className="h-full object-cover mx-auto min-w-full rounded-b" src={content.image}
                                             alt="メインビジュアル"/>
                                        <div className="absolute top-0 right-0 m-3 opacity-80 bg-blue-900 rounded">
                                            <p className="text-white text-sm md:text-xl font-bold p-3">
                                                {content.title}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        )
                    }
                </Slider>
                <div className={"absolute text-white z-30 top-0 inset-x-0 text-center text-3xl font-bold"}>
                    <div className="h-16 border-solid border-white border w-px m-auto"/>
                    <p className="mx-auto text-shadow-md">2020/10/31 - 11/01</p>
                </div>
            </div>
        );
    }
}