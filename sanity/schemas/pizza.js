import { MDLocalPizza as icon } from 'react-icons/md'

export default {
    // Computer name
    name: 'pizza',
    // Visible title
    title: 'Pizzas',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza name',
            type: 'string',
            description: 'Name of the pizza'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100
            }
        },
        {
            name: 'Image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            desription: 'Price of the pizza in cents',
            validation: Rule => Rule.min(1000),
            // TODO: Add custom input component
        }
    ]
}