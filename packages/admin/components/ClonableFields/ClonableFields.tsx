/** @jsxImportSource @emotion/react */
import React from "react"
import { AdminFields } from "@local/lib"
import { Button, Collapse } from "antd"
import { useField, FieldArray, FieldInputProps } from "formik"
import PlusSquareOutlined from "@ant-design/icons/lib/icons/PlusSquareOutlined"
import HolderOutlined from "@ant-design/icons/lib/icons/HolderOutlined"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import { AdminFieldset } from "../AdminFieldset/AdminFieldset"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export const ClonableFields: React.FC<{
  name: string
  fields?: AdminFields<unknown>
  component?: React.FC<Omit<FieldInputProps<unknown>, "children">>
}> = ({ name, fields, component }) => {
  const [field] = useField(name)
  return (
    <FieldArray
      name={name}
      render={(helpers) => (
        <Wrapper>
          <Collapse>
            {(Array.isArray(field.value) ? field.value : []).map((_, index) => (
              <Collapse.Panel
                key={index}
                header={
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
                    ...field,
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
              </Collapse.Panel>
            ))}
          </Collapse>
          <Button
            onClick={() => helpers.push(undefined)}
            icon={<PlusSquareOutlined />}
            type="primary"
            ghost
            css={css`
              margin-top: 16px;
            `}
          >
            Přidat
          </Button>
        </Wrapper>
      )}
    />
  )
}

const Wrapper = styled.div`
  .ant-collapse-header {
    align-items: center !important;
    padding: 4px 16px !important;
  }
`
