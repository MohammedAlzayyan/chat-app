const TextMsg = ({ item }) => {
  return (
    <div className={`flex justify-start`}>
      <div className="bg-blue-300 px-4 py-1 rounded-full">
        <span>
          {/* {item.msg} */}
          text text text text text text text
        </span>
      </div>
    </div>
  )
}

const ImageMsg = ({ item }) => {
  return (
    <div className={`flex justify-end`}>
      <div className="bg-blue-300 px-2 py-2 rounded-xl">
        {/* <img src={item.src} alt={item.alt} className="w-20 h-14" /> */}
        <img
          src="https://png.pngitem.com/pimgs/s/54-546782_download-nature-high-quality-png-nature-png-transparent.png"
          alt="vercel"
          className="w-[250px] h-[200px] rounded-xl"
        />
      </div>
    </div>
  )
}

const FileMeg = ({ item }) => {
  return (
    <div className={`flex justify-start`}>
      <div className="bg-blue-300 px-2 py-2 rounded-xl">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <span>name file</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export { TextMsg, ImageMsg, FileMeg }
