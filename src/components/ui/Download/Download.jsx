import BlueLine from "../BlueLine"
import Button from "./Button"

export default function Download({ data }) {
    return(
        <div className="w-full bg-white text-black py-20">
            <div className="mx-auto w-11/12 md:w-8/12 lg:w-6/12 space-y-10">
                <p className="text-4xl font-medium">Aportes del Proyecto SEED</p>
                <BlueLine />
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
                    {
                        data && data.length > 0 &&
                            data.map((item, index) => 
                                <Button key={index} item={item} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}