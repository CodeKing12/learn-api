export default function MediaCard({ movie }) {   
    const movieInfo = movie._source.info_labels

    return (
        <div className={`media-card max-w-[250px] w-full xsm:max-w-[230px] mx-auto h-[340px] sm:h-[300px] rounded-xl bg-black-1 backdrop-blur-2xl bg-opacity-60 cursor-pointer group relative overflow-clip duration-[400ms] ease-in-out border-4 border-transparent`}>
            <img width={300} height={400} className="w-full h-full max-h-full object-cover rounded-xl opacity-75" src={movie._source.i18n_info_labels[0].art.poster} />
            <div className={`w-full h-full absolute bottom-0 py-5 px-3 text-gray-100 bg-black bg-opacity-80 rounded-[11px] opacity-0 group-hover:opacity-100 invisible group-hover:visible ease-in-out duration-[400ms]`}>
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h5 className="text-[15px] sm:text-base lg:text-[17px] font-medium mb-1 group-hover:text-yellow-300 duration-300 ease-linear">{ movieInfo.originaltitle }</h5>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <p className="text-sm text-gray-400">
                                {
                                    movieInfo.genre.join(", ")
                                }
                            </p>
                        </div>
                        <p className="text-sm text-gray-400 text-opacity-80 mt-2">{ movieInfo.premiered }</p>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex gap-0.5 scale-90 sm:scale-100">
                                4 stars
                            </div>
                            <p className="text-sm text-gray-300 text-opacity-70 font-medium leading-normal">40</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="p-3 flex items-center gap-4 bg-[rgba(249,249,249,0.20)] backdrop-blur-[5px] rounded-2xl text-[#F9F9F9] text-lg tracking-wide font-bold border-none !outline-none hover:bg-[#F9F9F9] hover:text-black-1 group">
                        </button>

                        {/* <button className="px-10 py-3 bg-yellow-300 text-black-1 rounded-xl text-sm tracking-wide font-semibold border-2 border-transparent hover:bg-black-1 hover:border-yellow-300 hover:text-yellow-300">
                            Watch
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}