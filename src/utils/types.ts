import { DropTargetMonitor } from "react-dnd";

export const ITEM_TYPE = 'ITEM';
export const COLUMN_TYPE = 'COLUMN';

export interface Item {
    itemTitle: string;
    itemDescription: string;
    columnId: number;
};

export interface Column {
    columnId: number,
    columnTitle: string;
};

export interface ColumnWrapperProps {
    // onDropColumn: (item: any, monitor: DropTargetMonitor, columnId: number) => void;
    columns: Column[];
    updateColumn: (data: MoveItProps) => void;
};

export interface ItemsWrapperProps {
    onDropItem: (
        item: any,
        monitor: DropTargetMonitor,
        columnId: number
    ) => void;
    columnId: number;
    items: Item[];
    updateItem: (data: MoveItProps) => void;
};

export interface MoveItProps {
    dragIndex?: number;
    hoverIndex?: number;
}

export interface BaseColumnItemProps {
    index: number;
    moveIt: (dragIndex: number, hoverIndex: number) => void;
}

export interface ColumnProps extends BaseColumnItemProps {
    isOver: boolean;
    column: Column;
    columns: Column[];
    updateItemColumn: (item: any, columnId: number) => void;
};

export interface ItemProps extends BaseColumnItemProps {
    item: Item;
    columnId: number;
};

export interface DragItem extends Item {
    index: number;
    type: string;
};

export interface ColumnItem extends DragItem { };

export interface WindowProps {
    show: boolean;
    onClose: () => void;
    item: Item;
}

export interface ItemReducer extends MoveItProps, Item {
    idx?: number;
}