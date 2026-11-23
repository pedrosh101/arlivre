import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware() {});

// aplica next-auth apenas para as matching routes
export const config = { matcher: ["/conta"] };
