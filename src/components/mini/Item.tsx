export type ItemType = "File" | "Folder"

interface ItemProps {
	itemType: ItemType,
	itemName: string | undefined
}

function Item(props: ItemProps) {
	return (
		<div>
			<img />
			{props.itemName}
		</div>
	)
}

export default Item
