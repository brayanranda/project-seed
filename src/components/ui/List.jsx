import { faStarOfLife, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function List({ data, ordered }) {
    function getNumber(number) {
        const numbers = [fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9];
        const digitCount = Math.floor(Math.log10(number) + 1);
        const elem = []

        for (let i = Math.pow(10, digitCount - 1); i > 0; i = Math.floor(i / 10)) {
            const digit = Math.floor(number / i % 10);
            const icon = (final) => {
                return <FontAwesomeIcon className={`text-cyan-400 mr-${final ? "3" : "1"} mt-1`} icon={numbers[digit]} />
            }

            if (i > 1) {
                elem.push(icon(false))
            } else {
                elem.push(icon(true))
            }
        }

        return elem
    }

    const items = data && data.length &&
        data.map((element, index) => {
            return <div className="flex items-start" key={index}>
                {
                    ordered
                        ? getNumber(index + 1)
                        : <FontAwesomeIcon className="text-cyan-400 mr-3 mt-1" icon={faStarOfLife} />
                }
                {element}
            </div>
        })
    return ordered
        ? <ol className="my-10 space-y-6">{items}</ol>
        : <ul className="my-10 space-y-6">{items}</ul>
}