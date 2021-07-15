import { sanitize } from "../src/index"
//import * as lib from '../src/index.js';
let testObject = {
  keepThis: true,
  removeThis: false,
  test: true,
  deep: {
    test: {
      nested: {
        value: true
      }
    }
  }
}
describe("Sanitize function", () => {

  it("can ignore properties specified in ignoreProperties", () => {
    let functionConfig = {
      ignoreProperties: ['removeThis', 'keepThis', 'deep']
    }
    let input = sanitize(testObject, functionConfig)
    expect(input).toEqual({ test: true })
  })

  it("can save properties specifieds in SaveProperties", () => {
    let functionConfig = {
      saveProperties: ['test']
    }
    let input = sanitize(testObject, functionConfig)
    expect(input).toEqual({ test: true })
  })

  it("can traverse nested properties via dot notation", () => {
    let functionConfig = {
      saveProperties: ['deep.test.nested.value']
    }
    let input = sanitize(testObject, functionConfig)
    expect(input).toEqual({ deep: { test: { nested: { value: true } } } })
  })
})