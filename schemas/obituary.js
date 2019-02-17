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
      }
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
  ]
}

export default obituary
