export default function MultipleImgs({ imgs }) {
    return(
        <figure className="bg-white p-5 rounded-lg my-10">
            {
                imgs.map((img, index) => 
                    <img key={index} className="mx-auto" src={img} />
                )
            }
        </figure>
    )
}