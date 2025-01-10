export const inputs = [
    {
        name: 'userName',
        type: 'text',
        label: 'Enter User Name',
        placeholder: 'Enter UserName',
        required: true, 
        unique: true
    },
    // {
    //     name: 'lastname',
    //     type: 'text',
    //     label: 'Enter your last name',
    //     placeholder: 'Enter your last name',
    //     required: true
    // },
    {
        name: 'email',
        type: 'email',
        label: 'Enter your email',
        placeholder: 'Enter your email',
        required: true
    },
    // {
    //     name: 'phone',
    //     type: 'number',
    //     label: 'Enter your phone number',
    //     placeholder: 'Enter your phone number',
    //     required: true
    // },
    {
        name: 'address',
        type: 'text',
        label: 'Enter your address',
        placeholder: 'Enter your address',
        required: true
    },
    {
        name: 'password',
        type: 'password',
        label: 'Enter your password',
        placeholder: 'Enter your password',
        required: true
    },
    // {
    //     label: "Gender",
    //     type: "select",
    //     options: [
    //         {
    //             label: "Male",
    //             value: "male",
    //         },
    //         {
    //             label: "Female",
    //             value: "female",
    //         },
    //     ],
    //     name: "gender",
    //     placeholder: "Enter your gender",
    //     required: true,
    // },
]


const items = [
    {
        name: "bola",
        age: 18
    },
    {
        name: "titi",
        age: 21
    },
    {
        name: "shola",
        age: 22
    }
]

console.log('items:', items);

const deleteItem = items.splice(0,1)
console.log('deleteItem:', deleteItem);

console.log('affected', items);