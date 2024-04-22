import BlueLine from "./BlueLine";

export default function TitleMd({ title, subTitle, color = "text-white", type = 1 }) {

    return (
        <div className={`${color}`}>
            {
                subTitle && <span className="opacity-50 text-2xl">{subTitle}</span>
            }
            {
                (() => {
                    const content = [
                        <>
                            <h1 className="text-5xl font-medium">{title}</h1>
                            <BlueLine />
                        </>,
                        <h2 className="text-4xl font-medium mb-7">{title}</h2>,
                        <h3 className="text-3xl font-medium mb-7">{title}</h3>,
                        <h4 className="text-2xl font-medium mb-7">{title}</h4>,
                        <h5 className="text-2xl font-medium mb-7">{title}</h5>,
                        <h6 className="text-2xl font-medium mb-7">{title}</h6>,
                    ]

                    return type >= 1 && type <= 6 ? content[type - 1] : "";
                })()
            }


        </div>
    );
}