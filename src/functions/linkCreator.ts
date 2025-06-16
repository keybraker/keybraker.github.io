export function createLinkDiv(
  href: string,
  text: string,
  className: string = "hover:underline"
) {
  return `<a href="${href}" rel="noopener noreferrer" target="_blank" class="${className}">${text}</a>`;
}
