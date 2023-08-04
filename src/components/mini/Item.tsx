import { readBinaryFile, BaseDirectory } from "@tauri-apps/api/fs"

const { URL } = globalThis

const fileIcon = URL.createObjectURL(new Blob([await readBinaryFile("file_explorer_icons/file.png", { dir: BaseDirectory.AppConfig })]))
const dirIcon = URL.createObjectURL(new Blob([await readBinaryFile("file_explorer_icons/folder.png", { dir: BaseDirectory.AppConfig })]))

export type ItemType = "File" | "Folder"

interface ItemProps {
  itemType: ItemType,
  itemName: string | undefined
}

function Item(props: ItemProps) {
  return (
    <div className="flex items-center">
      <img src={props.itemType === "File" ? fileIcon : dirIcon}/>
      <p>{props.itemName}</p>
    </div>
  )
}

export default Item
