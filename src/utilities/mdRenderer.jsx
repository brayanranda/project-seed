import List from "@/components/ui/List";
import TitleTextImg from "@/components/ui/TitleTextImg";
import TitleMd from "@/components/ui/TitleMd";

export const renderer = {
    heading(text, level, raw) {

        const jsonRegex = /{.+}/g;

        let value = text;

        while(value && typeof value !== "string"){
            if(Array.isArray(value)){
                value = value[0];
            } else {
                value = value.props.children[0];
            }
        }

        if(!value) {
            value = "";
        }

        let json = value.match(jsonRegex)

        let data = {
            subTitle: null, color: "text-white",
        }

        if(json){
            try {
                data = {
                    ...data,
                    ...JSON.parse(json),
                }
                value = value.replace(jsonRegex, "");
            } catch (err) {
            }
        }

        return <TitleMd title={value} subTitle={data.subTitle} color="text-white" type={level} />
    },

    list(body, ordered, start) {
        return <List data={body} ordered={ordered} />
    },

    image(href, title, text) {
        return <TitleTextImg img={href} />
    },
    paragraph(text) {
        return <p className="my-5">{text}</p>
    },
};