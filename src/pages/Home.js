import React, { useEffect, useState } from 'react'
import { Form, Carousel, Input, } from 'antd'
import CardComment from '../components/CardComment';

import useFetch from "react-fetch-hook";
import Item from "../components/Item";
import ItemList from '../components/ItemList';
import SearchBar from '../components/SearchBar';

const Home = () => {

    const { isLoading, data, error } = useFetch("http://localhost:4000/api/v1/tours");
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <main className='container'>
                {/* Know before you go */}
                <section>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12 section-content'>
                            <div className='d-flex align-items-center gap-1 mt-3'>
                                <p className='section-content-title'>Know before you go</p>
                                <img src='https://doan-eta.vercel.app/static/media/world.12b28835610f2449f5e9.png' className='section-content-logo'></img>
                            </div>
                            <h1 className='py-4'>Traveling opens the door to creating <span>memories with Vinh</span> </h1>

                            <p className='mt-2'>Our Vietnam is a beautiful country. We have a variety of landscapes
                                which are widely well-known such as Ha Long Bay, Hoi An Old quarter
                                and Phong Nha Ke Bang cave. A long coast with many attractive beaches
                                is also our recognized reputation. Although Vietnam was a rich
                                traditional culture country, it has undergone a great
                                change since 1945 due to the war. But you can still
                                find spiritual values in traditional arts performances
                                such as singing Tru, Cheo, Tuong, water puppet, ancient
                                artifacts at the museums at the cultural centers in Hanoi and Saigon.</p>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'  >
                            <div className='row p-2'>
                                <div className='col-lg-4 col-md-4 img-content__left' ><img src='https://i.pinimg.com/236x/35/2b/10/352b1068e6351b84593d7bf43077d831.jpg'></img></div>
                                <div className='col-lg-4 col-md-4 col-sm-12 video-content'><video controls src='https://pin.it/5lgW8Jw'></video></div>
                                <div className='col-lg-4 col-md-4 img-content__right'><img src='https://i.pinimg.com/236x/e0/11/d8/e011d8b433217d2e7e5d9656ca8daeac.jpg'></img></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* search bar */}
                <section>
                    <SearchBar></SearchBar>
                </section>

                {/* What we serve */}

                <section >

                    <div className='row'>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <p className='section-content-title m-0'>What we serve</p>
                            <p className='fw-bolder fs-4'>We offer our best services</p>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 mb-3'>
                            <div className='card'>
                                <div className='card-img'>
                                    <span><i className="fa-solid fa-cloud-sun"></i></span>
                                </div>
                                <div className='card-body'>
                                    <p className='card-title p-0'>Calculate Weather</p>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 mb-3'>
                            <div className='card'>
                                <div className='card-img'>
                                    <span><i className="fa-solid fa-torii-gate"></i></span>
                                </div>
                                <div className='card-body'>
                                    <p className='card-title p-0'>Best Tour Guide</p>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-12 col-sm-12 mb-3'>
                            <div className='card'>
                                <div className='card-img'>
                                    <span><i className="fa-solid fa-gear"></i></span>
                                </div>
                                <div className='card-body'>
                                    <p className='card-title p-0'>Customization</p>
                                    <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* {Explore } */}

                <section>
                    <div>
                        <p className='section-content-title m-0'>Our featured tours</p>
                        <p className='fw-bolder fs-4'>Our featured tours</p>
                    </div>

                    <ItemList toursData={data}></ItemList>

                </section>


                {/* { "Experience"} */}
                <section>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p className='section-content-title m-0  mb-4'>Experience</p>
                            <h2 className='fw-bolder mb-4'>
                                With Duong our all experience
                                we will serve you</h2>
                            <p className='text-muted mb-4'>Vinh ipsum dolor sit consectetur.
                                <br></br>
                                litttttttttttttttttttttttttttttt</p>
                            <div className='d-flex align-item-stat gap-5 mb-4'>
                                <div className='exp-content'>
                                    <p>12k+</p>
                                    <small>Successful trip</small>
                                </div>
                                <div className='exp-content'>
                                    <p>2k+</p>
                                    <small>Regular clients</small>

                                </div>
                                <div className='exp-content'>
                                    <p>15</p>
                                    <small>Year experience</small>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <img src='https://doan-eta.vercel.app/static/media/experience.f276d1992082e5879afb.png'></img>
                        </div>
                    </div>
                </section>

                {/* {Gallery } */}

                <section>
                    <div>
                        <p className='section-content-title m-0'>What we serve</p>
                        <p className='fw-bolder fs-4'>We offer our best services</p>
                    </div>
                    <div className='row wraper-img'>
                        <img className="rounded-4 p-2 hover-img" src='https://i.pinimg.com/236x/c2/27/81/c22781dd052e0edaf80e470ed9b6f13f.jpg' alt='random-img' ></img>
                        <img className="rounded-4 p-2 hover-img" src='https://i.pinimg.com/236x/02/a4/9e/02a49eaa53503f3d9b52dbc53cce1dca.jpg' alt='random-img'></img>
                        <img className="rounded-4 p-2 hover-img" src='https://i.pinimg.com/236x/1f/55/e1/1f55e172a7310210a79b77c6c86bf6e3.jpg' alt='random-img'></img>
                        <img className="rounded-4 p-2 hover-img" src='https://i.pinimg.com/236x/fa/ff/ae/faffae9ba54ee820c6fba08f77b91940.jpg' alt='random-img'></img>
                        <img className="rounded-4 p-2 hover-img" src='https://i.pinimg.com/236x/e9/58/63/e95863cdaf70eeb89ba36f6d9b9f8a22.jpg' alt='random-img'></img>
                        <img className="rounded-4 p-2 hover-img" src='https://i.pinimg.com/236x/52/17/c1/5217c1e69e722b93b3217b97f4b2a981.jpg' alt='random-img'></img>
                        <img className="rounded-4 p-2 hover-img" src='https://i.pinimg.com/236x/57/9b/46/579b463183ec6ecf2e29be5be6dd623d.jpg' alt='random-img'></img>
                        <img className="rounded-4 p-2 hover-img" src='https://i.pinimg.com/236x/17/eb/fd/17ebfd3bf8b06e6af31b1455335cfb98.jpg' alt='random-img'></img>
                    </div>
                </section>


                {/* {Carousel} */}
                <section>
                    <div>
                        <p className='section-content-title m-0'>Fans Love</p>
                        <p className='fw-bolder fs-4'>What our fans say about us</p>
                    </div>
                    <div className=''>
                        <Carousel {...settings} >
                            <CardComment name="Vinh" role="Admin"></CardComment>
                            <CardComment name="Vinh" role="Admin"></CardComment>
                            <CardComment name="Vinh" role="Admin"></CardComment>
                            <CardComment name="Vinh" role="Admin"></CardComment>
                        </Carousel>
                    </div>
                </section>


                {/* Subcribe  */}
                <section style={{ marginBottom: "110px" }}>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-6'>
                            <h2>Subcribe DUONG now to get useful traveling information</h2>
                            <Form>
                                <Input.Search
                                    placeholder="Enter your email"
                                    allowClear
                                    enterButton="Subcribe "
                                    size="middle"
                                    bordered={false}
                                    style={{ borderBottom: "1px solid #ff7e01", borderRadius: "10px" }}
                                />
                            </Form>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-6'>
                            <img src='https://doan-eta.vercel.app/static/media/male-tourist.f000d0ad1ca492b2bcfb.png' alt='sybbb..'></img>
                        </div>
                    </div>
                </section>







            </main>
        </>
    )

}

export default Home