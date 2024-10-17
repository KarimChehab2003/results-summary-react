import { useEffect, useState } from "react";
import SummaryItem from "./SummaryItem";
import axios from "axios";

function Summary() {
    const [data, setData] = useState([]);
    const colors = ['bg-red-50', 'bg-yellow-50', 'bg-green-50', 'bg-indigo-50'];
    useEffect(() => {
        axios.get('/data.json')
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.error("Error fecthing the JSON data: ", error)
            })
    })
    return (
        <div className="md:w-2/4 rounded-2xl flex flex-col justify-between p-4">
            <h2 className="capitalize text-xl" style={{ fontFamily: "Hanken-Bold" }}>summary</h2>
            {
                data.length > 0 ? (
                    <ul className="my-4">
                        {data.map((item, index) => (
                            <li className={`${colors[index % colors.length]} rounded-lg mb-2`}><SummaryItem category={item.category} score={item.score} icon={item.icon} /></li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )
            }

            <button className="rounded-full bg-sky-950 text-white capitalize py-2 hover:bg-gradient-to-b from-violet-600 to-indigo-700">continue</button>
        </div>
    );
}

export default Summary;