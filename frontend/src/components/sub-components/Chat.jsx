import {styled} from '@nextui-org/react'

export const Chat = styled ("div", {
    dflex:'end',
    position:'fixed',
    width: "100%",
    bottom: "20px",
    right: "20px",
    "& .nextui-radio-group-items": {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "1fr",
        gridColumnGap: "$8",
        gridRowGap: "$2",
    },
})
