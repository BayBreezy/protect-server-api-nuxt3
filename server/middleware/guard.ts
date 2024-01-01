export default defineEventHandler(async (event) => {
  // get the url being called
  const url = getRequestURL(event);
  // get the pathname from the url
  const { pathname } = new URL(url);
  // create a list of endpoints that we want to protect
  const protectedRoutes = ["/api/users"];
  // check if the pathname is in the list of protected routes
  for (let i = 0; i < protectedRoutes.length; i++) {
    const r = protectedRoutes[i];
    // if the pathname is in the list of protected routes
    if (pathname === r) {
      // ensure user is logged in before getting a response
      await requireUserSession(event);
    }
  }
});
