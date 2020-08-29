import { MoveItProps, Item, ItemReducer } from '../utils/types';
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const UPDATE_ITEM_COLUMN = 'UPDATE_ITEM_COLUMN';

export const addItem = (data: Item) => ({
    type: ADD_ITEM,
    payload: data,
});

export const updateItem = (data: MoveItProps) => ({
    type: UPDATE_ITEM,
    payload: data,
});

export const updateItemColumn = (data: ItemReducer) => ({
    type: UPDATE_ITEM_COLUMN,
    payload: data,
});

export const deleteItem = (idx: number) => ({
    type: DELETE_ITEM,
    payload: idx,
});


const initialState:Item[] = [
    {
        columnId: 0,
        itemTitle: 'First Item of column 1x1',
        itemDescription: 'Description 1x1',
    },
    {
        columnId: 0,
        itemTitle: 'First Item of column 1x2',
        itemDescription: 'Description 1x2',
    },
    {
        columnId: 0,
        itemTitle: 'First Item of column 1x3',
        itemDescription: 'Description 1x3',
    },
    {
        columnId: 1,
        itemTitle: 'Second Item of column 2x1',
        itemDescription: 'Description 2x1',
    },
    {
        columnId: 1,
        itemTitle: 'Second Item of column 2x2',
        itemDescription: 'Description 2x2',
    },
    {
        columnId: 1,
        itemTitle: 'Second Item of column 2x3',
        itemDescription: 'Description 2x3',
    },
    {
        columnId: 2,
        itemTitle: 'Third Item of column 3x1',
        itemDescription: 'Description 3x1',
    },
    {
        columnId: 2,
        itemTitle: 'Third Item of column 3x2',
        itemDescription: 'Description 3x2',
    },
    {
        columnId: 2,
        itemTitle: 'Third Item of column 3x3',
        itemDescription: 'Description 3x3',
    },
]

function itemsReducer(
    state = initialState,
    action: { type: string; payload: ItemReducer}
) {
    switch (action.type) {
        case ADD_ITEM:
            return state;
        case UPDATE_ITEM:
            const nextItem = state.filter(
                (item, idx) => idx !== action.payload.dragIndex
            );
            nextItem.splice(
                action.payload.hoverIndex!,
                0,
                state[action.payload.dragIndex!]
                );
                return [...nextItem];
        case UPDATE_ITEM_COLUMN:
            const nextItemColumn = state
                .filter((each) => {
                    return each.itemTitle !== action.payload.itemTitle
                })
                .concat({ ...action.payload!, columnId: action.payload.columnId! });
            return [...nextItemColumn];
        case DELETE_ITEM:
            return state;
        default:
            return state;
    }
}

export default itemsReducer;
