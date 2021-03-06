const obituary = {
  title: 'Obituaries',
  name: 'obituary',
  type: 'document',
  fields: [
    {
      title: 'Full Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Expired / Active',
      name: 'active',
      type: 'boolean'
    },
    {
      title: 'Birth Date',
      name: 'birthDate',
      type: 'date',
      default: Date.now(),
      options: {
        dateFormat: 'YYYY-MM-DD'
      }
    },
    {
      title: 'Death Date',
      name: 'deathDate',
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
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'deathDate',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Death Date',
      name: 'deathDate',
      by: [
        { field: 'deathDate', direction: 'desc' }
      ]
    }
  ]
}

export default obituary
