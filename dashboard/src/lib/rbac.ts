export type UserRole = 'admin' | 'manager' | 'operator' | 'viewer'

const permissions: Record<UserRole, string[]> = {
  admin: ['*'],
  manager: ['read', 'write', 'delete', 'manage_users'],
  operator: ['read', 'write'],
  viewer: ['read'],
}

export function hasPermission(role: UserRole, permission: string): boolean {
  return permissions[role]?.includes('*') || permissions[role]?.includes(permission) || false
}