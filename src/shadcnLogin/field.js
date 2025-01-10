export const field  = [
    {
        name: 'email',
        type: 'email', 
        label: 'Enter your email',
        placeholder: 'Enter your email',
        required: true
    },
    {
        name: 'password',
        type: 'password',
        label: 'Enter your password',
        placeholder: 'Enter your password',
        required: true
    },
]
// console.log(field);

const cal = [3, 4, 5, 6, 9, 'titie' ,'sam']

const sum = cal.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

console.log(sum, 'sumtotal');
