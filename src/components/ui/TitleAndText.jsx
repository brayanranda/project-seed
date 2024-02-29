export default function TitleAndText({ title = "", description = "", bold = false }) {
    const newDescription = description.replace(/<br>/g, '<div class="my-break"></div>');
    return(
        <>
            {title && <p className={`${bold ? "" : "text-2xl font-medium"} mb-5`}>{title}</p>}
            {description && <p dangerouslySetInnerHTML={{ __html: newDescription }} />}
        </>
    );
}