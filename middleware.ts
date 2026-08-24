export const config = {
  matcher: "/",
};

const HOST_MAP: Record<string, string> = {
  "owl.overwatchlabs.dev": "/products/owl",
  "omniark.overwatchlabs.dev": "/products/omniark",
  "ark.overwatchlabs.dev": "/products/ark",
};

export default async function middleware(request: Request): Promise<Response | undefined> {
  const host = (request.headers.get("host") || "").toLowerCase();
  const dest = HOST_MAP[host];
  if (!dest) return;

  const { pathname } = new URL(request.url);
  if (pathname !== "/" && pathname !== "") return;

  return fetch(new URL(dest, request.url));
}
