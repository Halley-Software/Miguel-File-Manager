import { type FileEntry } from "@tauri-apps/api/fs"

import Item, { type ItemType } from "./mini/Item"

interface ItemsViewProps {
  items: FileEntry[]
}

/**
 *
 * @param {ItemsViewProps} items Array containing all the files and directories (items) in the actual directory
 * @returns
 */
function ItemsView({items}: ItemsViewProps) {
  return (
    <div>
      {items.map(item => {
        const itemType: ItemType = item.children ? "Folder" : "File";
        return <Item key={item.name} itemType={itemType} itemName={item.name}/>
      })}
    </div>
  )
}

export default ItemsView
