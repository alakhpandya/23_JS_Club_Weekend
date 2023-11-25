// console.log("Hello World!");

// export const capitalizeString = (s) => s[0].toUpperCase() + s.substr(1, s.length-2) + s[s.length-1].toUpperCase()

export default function capitalizeString(s){
    s[0].toUpperCase() + s.substr(1, s.length-2) + s[s.length-1].toUpperCase()
}

// console.log(capitalizeString("hello world"));