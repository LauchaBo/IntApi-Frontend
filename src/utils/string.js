export const toLowerCamelCase = str => str[0].toLowerCase() + str.slice(1)

export const caseInsensitiveCompare = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase())

export const isLetterCharCode = charCode => (charCode > 31 && (charCode < 48 || charCode > 57))
