const value = "acbdefghijklmnopqrstuvwxyzABCDEGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
const len = 8

function generatePassword(length = 8) {

let password = ""
for (let i = 0; i < len; i++) {
    const randomNumber = Math.floor(Math.random() * value.length)
    password += value.charAt(randomNumber)
}

const arrNumbers = [1, 2, 3, 4, 5]

return password;
}