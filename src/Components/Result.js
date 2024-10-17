function Result() {
    return (
        <div className="md:w-2/4 rounded-2xl bg-gradient-to-b from-violet-600 to-indigo-700 text-white flex flex-col justify-between items-center p-4">
            <h2 className="capitalize text-gray-300 font-medium text-xl">your result</h2>
            <div className="w-36 h-36 rounded-full flex flex-col justify-center items-center bg-gradient-to-b from-indigo-700">
                <p className="text-4xl font-bold">76</p>
                <p className="text-gray-300 text-xs">of 100</p>
            </div>
            <section className="text-center space-y-2">
                <p className="capitalize text-2xl" style={{ fontFamily: "Hanken-Bold" }}>great</p>
                <p className="text-gray-300 text-xs">You scored higher than 65% of the people who have taken these tests.</p>
            </section>
        </div>
    );
}

export default Result;