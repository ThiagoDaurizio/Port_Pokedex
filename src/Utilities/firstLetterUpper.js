export const firstLetterUpper = (string) => {
    const toUpperFirst = string[0].toUpperCase() + string.substring(1)

    return toUpperFirst
}