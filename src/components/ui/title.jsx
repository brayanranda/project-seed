import BlueLine from "./BlueLine";

export default function Title({ sub_title, title, color = false, size = false }) {
    return(
        <div className={`${size ? "" : "mx-auto w-11/12 md:w-10/12"} ${color ? "text-black" : "text-white"}`}>
            <h4 className="opacity-50 text-2xl">{sub_title}</h4>
            <h1 className="text-5xl font-medium">{title}</h1>
            <BlueLine />
        </div>
    );
}