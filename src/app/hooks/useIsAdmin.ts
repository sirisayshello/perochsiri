export const useIsAdmin = () => {
  console.log("useIsAdmin", document.cookie);

  return document.cookie.includes("admin=bomumma");
};
