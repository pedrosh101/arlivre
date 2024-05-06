export { default } from "next-auth/middleware";

// aplica next-auth apenas para as matching routes
export const config = { matcher: ["/conta"] };
