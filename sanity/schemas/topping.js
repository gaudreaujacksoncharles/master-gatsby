import { FaPepperHot as icon } from 'react-icons/fa'

export default {
    name: 'topping',
    title: 'Toppings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Topping name',
            type: 'string',
            description: 'What is the name of the topping?'
        },
        {
            name: 'vegetatian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'Do you want your pizza vegetarian?',
            options: {
                layout: 'checkbox'
            }
        }
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
        },
        prepare: ({name, vegetarian}) => ({
            title: `${name} ${vegetarian ? '🌱':''}`
        })
    }
}