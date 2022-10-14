import { enumToSchemaOptions } from ".."

describe("enumToSchemaOptions util", () => {
  it("should convert enum to options", () => {
    enum SomeEnum {
      Any = "any",
      Thing = "thing",
    }
    expect(enumToSchemaOptions(SomeEnum)).toEqual(["any", "thing"])
  })
})
