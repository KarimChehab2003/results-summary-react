function SummeryItem(props) {
    return (
        <div className="flex justify-between p-2">
            <section className="flex space-x-2">
                <img src={props.icon} alt="" />
                <p>{props.category}</p>
            </section>
            <p className="text-gray-400" ><span className="text-sky-950" style={{ fontFamily: "Hanken-Bold" }}>{props.score}</span> / 100</p>
        </div>
    );
}

export default SummeryItem;