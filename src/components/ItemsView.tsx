//import { invoke } from "@tauri-apps/api"
import { type FileEntry } from "@tauri-apps/api/fs"
import Item, { type ItemType } from "./mini/Item"

interface ItemsViewProps {
  items: FileEntry[]
}

/**
 * Contains all the items from the readed dir
 * @param {ItemsViewProps} items Array containing all the files and directories (items) in the actual directory
 * @returns
 */
function ItemsView({items}: ItemsViewProps) {
  return (
    <div className="flex flex-col gap-y-5 px-10 pt-5 pb-10">
      {items.map(item => {
        const itemType: ItemType = item.children ? "Folder" : "File";
        return <Item key={item.name} itemType={itemType} itemName={item.name}/>
      })}
    </div>
  )
}

export default ItemsView
