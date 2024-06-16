import Slider from "./components/Slider";
import Information from "./components/Information";
import Structures from "./components/Structures";

export default function About() {
    return(
        <main className="w-full bg-seed">
            <div className="relative z-10">
                <Slider />
                <Information />
                <Structures />
            </div>
        </main>
    );
}