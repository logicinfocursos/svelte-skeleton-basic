import { putOneZeroOnTheLeftSide } from './strings'

export const getDateTime = ({ dateFormat = 'ymd', insertTime = false, separationCharacter = '/' }) => {

    // dateFormat ymd, dmy
    let today = new Date()
    let date = dateFormat === 'ymd' ? today.getFullYear() + separationCharacter + putOneZeroOnTheLeftSide((today.getMonth() + 1)) + separationCharacter + putOneZeroOnTheLeftSide(today.getDate()) :
        putOneZeroOnTheLeftSide(today.getDate()) + separationCharacter + putOneZeroOnTheLeftSide((today.getMonth() + 1)) + separationCharacter + today.getFullYear()

    if (insertTime) date += " " + putOneZeroOnTheLeftSide(today.getHours()) + ":" + putOneZeroOnTheLeftSide(today.getMinutes()) + ":" + putOneZeroOnTheLeftSide(today.getSeconds())

    return date
}