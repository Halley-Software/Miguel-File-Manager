import { BaseDirectory } from "@tauri-apps/api/path"
import { readDir } from "@tauri-apps/api/fs"
import ItemsView from "./components/ItemsView"
import NavBar from "./components/NavBar"

const deskDirItems = await readDir(".", { dir: BaseDirectory.Desktop })

  return (
    <div>
      <ItemsView items={items}/>
    </div>
  )
}

export default App
