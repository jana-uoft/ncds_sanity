const event = {
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Start Time',
      name: 'startTime',
      type: 'datetime',
      default: Date.now(),
      options: {
        timeStep: 30
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'End Time',
      name: 'endTime',
      type: 'datetime',
      default: Date.now(),
      options: {
        timeStep: 30
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
  ]
}

export default event
