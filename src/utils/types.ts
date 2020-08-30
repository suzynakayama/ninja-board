import { DropTargetMonitor } from 'react-dnd';

export const ITEM_TYPE = 'ITEM';
export const COLUMN_TYPE = 'COLUMN';

export interface AppProps {
    modalOpen: (data: ItemReducer) => void;
}

export interface Item {
    itemId: string;
    itemTitle: string;
    itemDescription: string;
    columnId: string;
}

export interface Column {
    columnId: string;
    columnTitle: string;
}

export interface ColumnWrapperProps {
    // onDropColumn: (item: any, monitor: DropTargetMonitor, columnId: number) => void;
    columns: Column[];
    updateColumn: (data: MoveItProps) => void;
}

export interface ColumnProps extends BaseColumnItemProps {
    isOver: boolean;
    column: Column;
    columns: Column[];
    updateItemColumn: (data: ItemReducer) => void;
    modalOpen: (data: ItemReducer) => void;
}

export interface ItemsWrapperProps {
    onDropItem: (
        item: any,
        monitor: DropTargetMonitor,
        columnId: string
    ) => void;
    columnId: string;
    items: Item[];
    updateItem: (data: MoveItProps) => void;
}

export interface MoveItProps {
    dragIndex?: number;
    hoverIndex?: number;
    item?: any;
}

export interface BaseColumnItemProps {
    index: number;
    moveIt: (dragIndex: number, hoverIndex: number, item?: any) => void;
}

export interface ItemProps extends BaseColumnItemProps {
    item: Item;
    columnId: string;
}

export interface DragItem extends Item {
    index: number;
    type: string;
}

export interface ColumnItem extends DragItem {}

export interface WindowProps {
    show: boolean;
    onClose: () => void;
    item: Item;
}

export interface ItemReducer {
    idx?: number;
    newColumnId?: string;
    itemTitle?: string;
    itemDescription?: string;
    columnId?: string;
    item?: Item;
    dragIndex?: number;
    hoverIndex?: number;
    mode?: string;
    itemId?: string;
    columnTitle?: string;
}

export interface ItemMenuProps {
    item: Item;
    items: Item[];
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    deleteItem: (idx: ItemReducer) => void;
    modalOpen: (data: ItemReducer) => void;
}

export interface MoveItemsProps {
    item: any;
    items?: Item[];
    columns?: Column[];
    updateItemColumn: (data: ItemReducer) => void;
    setShowMoveItem: React.Dispatch<React.SetStateAction<boolean>>;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalProps {
    modal: {
        itemTitle: string;
        itemDescription: string;
        columnId: string;
        columnTitle: string;
        index: number;
        mode?: string;
    };
    modalClose: () => void;
    addItem?: (data: ItemReducer) => void;
    updateItemInfo?: (data: ItemReducer) => void;
    addColumn?: (data: string) => void;
    updateColumnInfo?: (data: ItemReducer) => void;
}

export interface ColumnEditMenuProps {
    column: Column;
    modalOpen: (data: ItemReducer) => void;
    setShowEditMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DeleteModalProps {
    showDeleteModal: boolean;
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    type: string;
    item?: Item;
    column?: Column;
    columnId?: string;
    deleteItem?: (data: ItemReducer) => void;
    deleteItems?: (data: ItemReducer) => void;
    deleteColumn?: (data: ItemReducer) => void;
}
