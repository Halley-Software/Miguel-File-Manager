import { readBinaryFile, BaseDirectory } from "@tauri-apps/api/fs"
import { useState } from "react"
import "../App.css"

const loupeIcon = URL.createObjectURL(new Blob([await readBinaryFile("file_explorer_icons/loupe.png", { dir: BaseDirectory.AppConfig })]))

function NavBar() {
  const [value, setValue] = useState("")

  return (
    <nav className="p-4 flex justify-between">
      <div className="flex">

        <div className="flex space-x-3 justify-center mr-4">
          <button>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(0)">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#000000" />
                </g>
            </svg>
          </button>
          <button>
            <svg
              width="25px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#000000"></path>
                </g>
            </svg>
          </button>
        </div>

        <ul className="flex flex-wrap content-center font-medium p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <a>BRUH</a>
          </li>
          <li>
            <a>BRUH</a>
          </li>
          <li>
            <a>BRUH</a>
          </li>
          <li>
            <a>BRUH</a>
          </li>
          <li>
            <a>BRUH</a>
          </li>
        </ul>
      </div>

      <form className="flex">
        <input onChange={(e) => {setValue(e.target.value)}} className="border rounded-sm px-2 caret-black focus:outline-0 border-gray-300" type="text"/>
        <button type="submit" onClick={(e) => {e.preventDefault(); console.log(value)}}>
          <img className="ml-2" src={loupeIcon}/>
        </button>
      </form>
    </nav>
  )
}

export default NavBar