const publication = {
  title: 'Publications',
  name: 'publication',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Publication Date',
      name: 'date',
      type: 'date',
      default: Date.now(),
      options: {
        dateFormat: 'YYYY-MM-DD'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{
        type: 'block'
      }]
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      options: {
        layout: 'grid'
      },
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date'
    }
  },
  orderings: [
    {
      title: 'Publication Date',
      name: 'date',
      by: [
        { field: 'date', direction: 'desc' }
      ]
    }
  ]
}

export default publication
