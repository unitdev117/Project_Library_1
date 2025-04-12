// import { get } from 'mongoose'

export default function crudRepository(model) {
  return {
    create: async function (data) {
      const newDoc = await model.create(data)
      return newDoc
    },
    getAll: async function () {
      const alldocs = await model.find()
      return alldocs
    },
    getById: async function (id) {
      const doc = await model.findById(id)
      return doc
    },
    delete: async function (id) {
      const response = await model.findByIdAndDelete(id)
      return response
    },
    update: async function (id, data) {
      const updatedDoc = await model.findByIdAndUpdate(id, data, { new: true })
      return updatedDoc
    },
  }
}
