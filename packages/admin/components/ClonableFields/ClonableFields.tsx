import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { AdminFields } from "@local/lib"
import { Button, Card } from "antd"
import { useField, FieldArray } from "formik"
import PlusSquareOutlined from "@ant-design/icons/lib/icons/PlusSquareOutlined"
import HolderOutlined from "@ant-design/icons/lib/icons/HolderOutlined"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { AdminFieldset } from "../AdminFieldset/AdminFieldset"
import { FieldProps } from "../Inputs/Fieldset/Fieldset"

export const ClonableFields: React.FC<{
  name: string
  fields?: AdminFields<any>
  component?: React.FC<Omit<FieldProps<any>, "children">>
}> = ({ name, fields, component }) => {
  const [field] = useField(name)
  return (
    <FieldArray
      name={name}
      render={(helpers) => (
        <>
          <ClonableContainer>
            {(Array.isArray(field.value) ? field.value : []).map((_, index) => (
              <ClonableItem
                key={index}
                css={css`
                  margin-bottom: 16px;
                `}
                title={
                  <div>
                    <HolderOutlined />
                  </div>
                }
                extra={
                  <Button
                    onClick={() => helpers.remove(index)}
                    icon={<DeleteOutlined />}
                    type="text"
                    danger
                  />
                }
              >
                {component &&
                  React.createElement(component, {
                    name: `${name}[${index}]`,
                    key: `${name}[${index}]`,
                  })}
                {fields && (
                  <AdminFieldset
                    key={`${name}[${index}]`}
                    fields={fields}
                    path={`${name}[${index}]`}
                  />
                )}
              </ClonableItem>
            ))}
          </ClonableContainer>
          <Button
            onClick={() => helpers.push(undefined)}
            icon={<PlusSquareOutlined />}
            type="primary"
            ghost
          >
            Přidat
          </Button>
        </>
      )}
    />
  )
}

const ClonableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
`

const ClonableItem = styled(Card)`
  width: 300px;
  margin: 8px;
`
