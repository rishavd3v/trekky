import { CardContainer, Carousel, InfoCard } from "../components/Cards";
import Hero from "../components/Hero";
import { Heading, SubHeading, UnderlinedHeading } from "../components/ui/Text";
import HorizontalBar from "../components/ui/HorizontalBar";
import Button from "../components/ui/Button";
import Features from "../components/Features";
import { Banner, Desc, Title } from "../components/Banner";
import Testimonial from "../components/Testimonial";
import { useNavigate } from "react-router-dom";
import useTrekStore from "../store/trekStore";
import Data from "../../data.json";

export default function Home(){
    const navigate = useNavigate();

    return(
        <div className="mx-24">
            <Hero/>
            <section className="flex flex-col gap-20">
                <section>
                    <CardContainer>
                        <UnderlinedHeading>Featured Treks</UnderlinedHeading>
                        <Carousel />
                    </CardContainer>
                </section>
                
                <Banner img="group">
                    <Title>Explore India's Wild Side</Title>
                    <Desc>Treks, trails, and tales waiting to be discovered.</Desc>
                    <Button className="mt-10" onClick={()=>navigate('/treks')}>Explore all treks</Button>
                </Banner>

                <section>
                    <UnderlinedHeading>Treks by Difficulty</UnderlinedHeading>
                    <CardContainer>
                        <SubHeading>Easy</SubHeading>
                        <Carousel difficulty={"easy"}/> 
                    </CardContainer>

                    <CardContainer>
                        <SubHeading>Moderate</SubHeading>
                        <Carousel difficulty={"moderate"}/>
                    </CardContainer>
                    <CardContainer>
                        <SubHeading>Challenging</SubHeading>
                        <Carousel difficulty={"hard"}/>
                    </CardContainer>
                    <HorizontalBar/>
                </section>

                <section className="grid grid-cols-2 gap-8">
                    <Banner img="himalayas">
                        <Title>Explore Himalayas</Title>
                        <Desc>Discover the beauty of the Himalayas with us.</Desc>
                        <Button className="mt-10" onClick={()=>navigate('/treks?type=himalayan')}>Learn More</Button>
                    </Banner>
                    <Banner img="weekend">
                        <Title>Weekend Getaways</Title>
                        <Desc>Short trips for a quick escape.</Desc>
                        <Button className="mt-10" onClick={()=>navigate('/treks?type=weekend')}>Learn More</Button>
                    </Banner>
                </section>

                <section>
                    {/* <UnderlinedHeading>Why choose us?</UnderlinedHeading> */}
                    <Features/>
                </section>

                <Testimonial/>



            </section>
        </div>
    )
}