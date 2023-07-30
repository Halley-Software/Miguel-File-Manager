import { FileEntry, readDir } from "@tauri-apps/api/fs"
import ItemsView from "./components/ItemsView"
import { useEffect, useState } from "react"

function App() {

  const [items, setItems] = useState<FileEntry[]>([])

  useEffect(() => {
    const readedItems = readDir("/home/raxabi")

    readedItems.then(items => setItems(items))
  }, [])


  return (
    <div>
      <ItemsView items={items}/>
    </div>
  )
}

export default App
