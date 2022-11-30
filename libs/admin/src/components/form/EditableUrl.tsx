import styled from "@emotion/styled"
import { useField } from "formik"
import { ChangeEvent, useRef, useState } from "react"
import { IoCreateOutline } from "react-icons/io5"
import useOnClickOutside from "use-onclickoutside"
import { webalize } from "@strelka/admin-ui"

export const EditableUrl: React.FC<{ name: string; url: string }> = ({
  name,
  url,
}) => {
  const [editing, setEditing] = useState(false)
  const [field, _, helpers] = useField(name)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setEditing(false))
  return (
    <Url ref={ref}>
      {url}/
      {editing ? (
        <input
          {...field}
          onChange={(value: ChangeEvent<HTMLInputElement>) => {
            const currentValue = value.target.value
            helpers.setValue(webalize(currentValue ?? ""))
          }}
        />
      ) : (
        field.value
      )}
      <IoCreateOutline onClick={() => setEditing(true)} />
    </Url>
  )
}

const Url = styled.span`
  font-size: 0.8rem;
`
