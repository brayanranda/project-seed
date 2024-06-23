import RunCodeBtn from './RunCodeBtn';
import MarkdownURL from './MarkdownURL';

export default function Section({ url, first = false, notPb = false, showBtnModal = false, typeModal, titleBtn = "" }) {

    return (
        <section className={`w-full ${notPb ? "" : "pb-20"} ${first ? "md:pt-40" : ""} relative`}>
            <article className="mx-auto w-11/12 md:w-10/12 relative">
                <MarkdownURL url={url}/>
                {
                    showBtnModal &&
                        <RunCodeBtn name={titleBtn} runner={typeModal} />
                }
            </article>
        </section>
    );
}