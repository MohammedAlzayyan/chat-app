import { ArrowDown } from '@/components/svg'
import Image1 from '@/components/svg/Image1'
import SmailIcon from '@/components/svg/SmailIcon'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const DropdownMsg = ({ className, setOpenDropdown }) => {
  return (
    <Menu as="div" className={`text-left ${className}`}>
      {({ open }) => (
        <>
          <Menu.Button>
            <ArrowDown className="w-5 h-5" />
          </Menu.Button>
          {setOpenDropdown(open)}
          {open && (
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-40 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-slate-400' : ''
                        } group text-slate-100 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Reply
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-slate-400' : ''
                        } group text-slate-100 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Forward
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-slate-400' : ''
                        } group text-slate-100 flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          )}
        </>
      )}
    </Menu>
  )
}

const TextMsg = ({ item }) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div className={`flex justify-start`}>
      <div className="group relative bg-slate-400 px-8 py-1 rounded-full">
        <span className="inline-block w-[470px] leading-5 text-sm">
          {/* {item.msg} */}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry, the printing and typesetting.
        </span>
        {/* <div className={`w-fit `}></div> */}
        <DropdownMsg
          setOpenDropdown={(o) => setOpenDropdown(o)}
          className={` ${
            openDropdown
              ? 'block absolute top-2 right-3'
              : 'hidden group-hover:block w-5 h-5 cursor-pointer absolute top-2 right-3'
          }`}
        />
        {/* <ArrowDown className="hidden absolute top-2 right-3 group-hover:block w-5 h-5 cursor-pointer" /> */}
      </div>
    </div>
  )
}

const ImageMsg = ({ item }) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div className={`flex justify-end`}>
      {/* <div className="bg-blue-300 p-1 rounded-xl"> */}
      {/* <img src={item.src} alt={item.alt} className="w-20 h-14" /> */}
      {/* <img
          src="https://png.pngitem.com/pimgs/s/54-546782_download-nature-high-quality-png-nature-png-transparent.png"
          alt="vercel"
          className="w-[250px] h-[200px] rounded-xl"
        /> */}
      {/* <Image1 /> */}
      <div className="group relative">
        <img
          src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
          alt="images"
          className="w-40 h-40 rounded-md object-fill group-hover:opacity-50 border-2 border-slate-400"
        />
        <DropdownMsg
          setOpenDropdown={(o) => setOpenDropdown(o)}
          className={` ${
            openDropdown
              ? 'block absolute top-2 left-3'
              : 'hidden group-hover:block w-5 h-5 cursor-pointer absolute top-2 left-3'
          }`}
        />
      </div>

      {/* </div> */}
    </div>
  )
}

const FileMeg = ({ item }) => {
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div className={`flex justify-start`}>
      <div className="group relative bg-slate-400 px-8 py-1 rounded-full">
        <div className="group flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <div className="flex flex-col mr-10">
            <span className="text-sm font-medium">name file</span>
            <span className="text-xs">pdf 12 MB</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>
        <DropdownMsg
          setOpenDropdown={(o) => setOpenDropdown(o)}
          className={` ${
            openDropdown
              ? 'block absolute top-1 right-2'
              : 'hidden group-hover:block w-5 h-5 cursor-pointer absolute top-1 right-2'
          }`}
        />
      </div>
    </div>
  )
}

export { TextMsg, ImageMsg, FileMeg }
