import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import {
  contribution,
  publication,
  gallery,
  galleryTag
} from './'

export default createSchema({
  name: 'default',
  types: [
    ...schemaTypes,
    contribution,
    publication,
    gallery,
    galleryTag
  ]
})
