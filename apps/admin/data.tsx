import { NavigationItem } from "@strelka/admin-ui/src/components/Navigation"
import {
  IoPeopleOutline,
  IoAddOutline,
  IoDocumentTextOutline,
  IoBrowsersOutline,
  IoCalendarOutline,
} from "react-icons/io5"
import { UserRole } from "repo/firestore/user"
import { routes } from "routes"

export const adminNavigation: (NavigationItem & {
  show?: (role: UserRole) => boolean
})[] = [
  {
    title: routes.pages.list.title(),
    route: routes.pages.list.route,
    icon: <IoDocumentTextOutline />,
    action: {
      title: routes.pages.create.title(),
      route: routes.pages.create.route,
      icon: <IoAddOutline />,
    },
  },
  {
    title: routes.events.list.title(),
    route: routes.events.list.route,
    icon: <IoCalendarOutline />,
    action: {
      title: routes.events.create.title(),
      route: routes.events.create.route,
      icon: <IoAddOutline />,
    },
  },
  {
    title: routes.users.list.title(),
    route: routes.users.list.route,
    icon: <IoPeopleOutline />,
    action: {
      title: routes.users.create.title(),
      route: routes.users.create.route,
      icon: <IoAddOutline />,
    },
    show: (role) => [UserRole.Admin, UserRole.SuperAdmin].includes(role),
  },
  {
    title: routes.sections.list.title(),
    route: routes.sections.list.route,
    icon: <IoBrowsersOutline />,
    action: {
      title: routes.sections.create.title(),
      route: routes.sections.create.route,
      icon: <IoAddOutline />,
    },
    show: (role) => UserRole.SuperAdmin === role,
  },
]
