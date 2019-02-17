const contribution = {
  title: 'Contribution',
  name: 'contribution',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      default: Date.now(),
      options: {
        dateFormat: 'YYYY-MM-DD'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{
        type: 'image',
        fields: [
          {
            title: 'Caption',
            name: 'caption',
            type: 'string',
            options: {
              isHighlighted: true
            }
          }
        ],
        options: {
          hotspot: true
        }
      }],
      validation: Rule => Rule.unique().error('Cannot have duplicate images')
    }
  ]
}

export default contribution
