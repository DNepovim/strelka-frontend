/** @jsxImportSource @emotion/react */
import { CSS } from "@dnd-kit/utilities"
import { useSortable } from "@dnd-kit/sortable"
import { css } from "@emotion/react"
import { BlockDef, blocksDefsList } from "@local/lib"
import { Card, Space, Button, Dropdown, Menu } from "antd"
import { useState } from "react"
import HolderOutlined from "@ant-design/icons/lib/icons/HolderOutlined"
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined"
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined"
import { AdminFieldset } from "../AdminFieldset/AdminFieldset"
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined"
import Title from "antd/lib/typography/Title"

export type BlockEditorBlockProps = Partial<BlockDef<any>> & {
  id: string
  index: number
  name: string
  onRemove: (index: number) => void
  onTemplateChange: (tempalte: string) => void
}

export const BlockEditorBlock: React.FC<BlockEditorBlockProps> = ({
  id,
  index,
  name,
  adminFields,
  onRemove,
  template,
  onTemplateChange,
}) => {
  const [isOpened, setIsOpened] = useState(false)
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div ref={setNodeRef} style={style}>
      <Card
        css={
          !isOpened &&
          css`
            .ant-card-body {
              padding: 0;
            }
          `
        }
        title={
          <Space>
            <Button type="text" {...attributes} {...listeners}>
              <HolderOutlined />
            </Button>
            <Button onClick={() => setIsOpened(!isOpened)} type="text">
              <RightOutlined
                css={css`
                  transition: transform 300ms !important;
                  ${isOpened && "transform: rotate(90deg);"}
                `}
              />
            </Button>
            <Title
              level={3}
              css={css`
                margin: 0 !important;
              `}
            >
              {template && blocksDefsList[template]
                ? blocksDefsList[template]?.title
                : "..."}
              <Dropdown
                trigger={["click"]}
                overlay={
                  <Menu>
                    {Object.values(blocksDefsList).map((block, index) => (
                      <Menu.Item key={index}>
                        <Button
                          block
                          onClick={() => onTemplateChange(block.template)}
                        >
                          {block.title}
                        </Button>
                      </Menu.Item>
                    ))}
                  </Menu>
                }
              >
                <Button type="link">
                  <EditOutlined />
                </Button>
              </Dropdown>
            </Title>
          </Space>
        }
        extra={
          <Button
            onClick={() => onRemove(index)}
            icon={<DeleteOutlined />}
            danger
          >
            Odebrat
          </Button>
        }
      >
        {isOpened &&
          (adminFields ? (
            <AdminFieldset
              path={`${name}[${index}].fields`}
              fields={adminFields}
            />
          ) : (
            <div>Vyberte šablonu</div>
          ))}
      </Card>
    </div>
  )
}
