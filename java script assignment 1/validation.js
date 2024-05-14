function StrongPassword(password, commonWords = []) {
    if (password.trim() === '') {
        return false;
    }
        for (let i = 0; i < password.length - 1; i++)
             {
        if (password[i] === password[i + 1]) {
            return false;
        }
    }
        for (let word of commonWords) {
        if (password.toLowerCase().includes(word.toLowerCase())) {
            return false;
        }
    }
        return true;
}
let password = "Abcd1234!";
let commonWords = ["password", "123456", "qwerty"];
let isStrong = StrongPassword(password, commonWords);
console.log(isStrong);
