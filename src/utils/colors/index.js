const mainColors = {
    green1: '#00adb5',
    dark1: '#393e46',
    grey1: '#7d8797',
    grey2: '#e9e9e9',
}

export const colors = {
    primary: mainColors.green1,
    secondary: mainColors.dark1,
    white: 'white',
    black: 'black',
    text: {
        primary: mainColors.dark1,
        secondary: mainColors.grey1
    },
    button: {
        primary: {
            background: mainColors.green1,
            text: 'white',
        },
        secondary: {
            background: 'white',
            text: mainColors.dark1, 
        }
    },
    border: mainColors.grey2,
}