const BASE_PATH =
  typeof window !== "undefined" &&
  window.location.pathname.startsWith("/0bliv.g1f")
    ? "/0bliv.g1f"
    : "";

export default BASE_PATH;
