export const tokenManager = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4Njc1ODk0OTM3MiIsIl9pZCI6IjVmNzZmOGUwMmE1ZjFmM2Y0ZjE5MWZjNyIsImVtYWlsIjoiZHV5LnRyYW5Adm1vZGV2LmNvbSIsImlhdCI6MTYzNDYxNDUwMn0.bNTtNyY8kgaqR4_39tz3pVQ9BFOHw6Q9Oc7yXFzcsic', // hard code token
  logout: [],
  setToken(t: string) {
    this.token = t;
  },
  setLogoutMethod(m: () => void) {
    this.logout = [m];
  },
  doLogout() {
    this.logout.forEach((i) => i());
  },
};
