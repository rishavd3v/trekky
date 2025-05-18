import { CardContainer, Carousel, InfoCard } from "../components/Cards";
import Hero from "../components/Hero";
import ImageGrid from "../components/ImageGrid";
import { Heading, SubHeading, UnderlinedHeading } from "../components/ui/Text";
import Data from "../../data.json";
import HorizontalBar from "../components/ui/HorizontalBar";
import Button from "../components/ui/Button";
import Features from "../components/Features";
import { Banner, Desc, Title } from "../components/Banner";

const sampleTrek = Data.treks;

export default function Home(){
    
    return(
        <div>
            <Hero/>
            <section className="flex flex-col gap-20">
                <section>
                    <CardContainer>
                        <UnderlinedHeading>Upcoming Treks</UnderlinedHeading>
                        <Carousel treks={sampleTrek} />
                    </CardContainer>
                </section>
                
                <section>
                    <UnderlinedHeading>Treks by Difficulty</UnderlinedHeading>
                    <CardContainer>
                        <SubHeading>Easy</SubHeading>
                        <Carousel treks={sampleTrek.filter(trek => trek.difficulty.toLowerCase() === "easy")} /> 
                    </CardContainer>

                    <CardContainer>
                        <SubHeading>Medium</SubHeading>
                        <Carousel treks={sampleTrek.filter(trek => trek.difficulty.toLowerCase() === "medium")} />
                    </CardContainer>
                    <CardContainer>
                        <SubHeading>Hard</SubHeading>
                        <Carousel treks={sampleTrek.filter(trek => trek.difficulty.toLowerCase() === "hard")} />
                    </CardContainer>
                    <HorizontalBar/>
                </section>

                <Banner>
                    <Title>Explore India's Wild Side</Title>
                    <Desc>Treks, trails, and tales waiting to be discovered.</Desc>
                </Banner>

                <section>
                    {/* <UnderlinedHeading>Why choose us?</UnderlinedHeading> */}
                    <Features/>
                </section>



            </section>
        </div>
    )
}