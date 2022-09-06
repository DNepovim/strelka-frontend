import React from "react"
import GooglePicker from "react-google-picker"

export interface ImagePickerProps {
  onChange: (v: unknown) => void
}

export const ImagePicker: React.FC<ImagePickerProps> = ({
  children,
  onChange,
}) => {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  const developerKey = process.env.NEXT_PUBLIC_GOOGLE_DEVELOPER_KEY
  const folderId = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PARENT_FOLDER_ID ?? ""
  const scope = ["https://www.googleapis.com/auth/drive"]

  if (!(clientId && developerKey && scope)) {
    return <>Some nessesary env variables are not defined.</>
  }

  return (
    <GooglePicker
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      developerKey={process.env.NEXT_PUBLIC_GOOGLE_DEVELOPER_KEY}
      scope={scope}
      onAuthFailed={(data: unknown) => {
        // eslint-disable-next-line no-console
        console.error("auth error", data)
      }}
      multiselect={true}
      navHidden={false}
      authImmediate={false}
      mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
      viewId={"DOCS_IMAGES_AND_VIDEOS"}
      createPicker={(g: typeof google, oauthToken: string) => {
        const docsUploadView = new g.picker.DocsUploadView().setParent(folderId)
        const docsView = new g.picker.DocsView(g.picker.ViewId.DOCS_IMAGES)
          .setParent(folderId)
          .setIncludeFolders(true)

        const picker = new g.picker.PickerBuilder()
          .addView(docsView)
          .addView(docsUploadView)
          .setLocale("cs-CZ")
          .setSelectableMimeTypes("image/png,image/jpeg,image/jpg")
          .setOAuthToken(oauthToken)
          .setDeveloperKey(developerKey)
          .setCallback((data: google.picker.ResponseObject) => {
            onChange(data?.docs?.[0]?.id)
          })

        picker.build().setVisible(true)
      }}
    >
      {children}
    </GooglePicker>
  )
}
