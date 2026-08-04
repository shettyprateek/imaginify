import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, req) => {
  const publicRoutes = ["/", "/api/webhooks/clerk", "/api/webhooks/stripe"];

  if (!publicRoutes.includes(req.nextUrl.pathname)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
};
