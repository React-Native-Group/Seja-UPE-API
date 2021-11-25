export const Permission = {
  DEFAULT_LEVEL: 'default'
}

export const PermissionKeys = Object.values(Permission);

export function getPermissionsFromNumber(role: number): string[] {
  let permKeys: number[] = [];
  PermissionKeys.map((v, k) => {
    if (!!(role & 2**k))
      permKeys.push(k);
  });
  return permKeys.map(v => PermissionKeys[v]);
}

export function getNumberFromPermissions(roles: string[]): number {
  let permBits: number[] = roles.map((v, _k) => {
    let index = PermissionKeys.indexOf(v.toLocaleLowerCase());
    return index != -1 ? 2**index : 0;
  })
  return permBits.reduce((a, b) => a + b);
}