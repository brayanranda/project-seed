import TitleAndText from "./TitleAndText";

export default function TitleTextImg({ title = "", description = "", bold, img, isFull = false }) {
    return(
        <>
            <TitleAndText
                bold={bold}
                title={title}
                description={description}
            />
            <figure className="p-3 bg-white rounded-md mt-8 mb-12 w-full">
                <img className={`mx-auto ${isFull ? "w-full" : ""} rounded-lg`} src={img} alt="Imagen" />
            </figure>
        </>
    );
}