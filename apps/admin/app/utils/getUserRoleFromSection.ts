import { Section } from "repo/firestore/section"
import { User, UserRole } from "repo/firestore/user"

export const getUserRoleFromSection = (
  user: User,
  section: Section
): UserRole => {
  if (user.superadmin) {
    return UserRole.SuperAdmin
  }

  if ((section.roles?.[UserRole.Admin] ?? []).includes(user.email)) {
    return UserRole.Admin
  }

  if ((section.roles?.[UserRole.Editor] ?? []).includes(user.email)) {
    return UserRole.Editor
  }

  return UserRole.None
}
