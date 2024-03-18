
export function replaceWithLinks(
  code: string,
  links: string[]
): string {
  return code.replace(
    /((\[\d*?\])|(\[\$\{\d*\}\]))(?!\()/g,
    (match) => {
      const index = Number(match.replace(/(\[(\$\{)?)|(\}?\])/g, ""))
      if (index < links.length) {
        return `[[${index}]](${links[index]})`
      }
      return match
    }
  )
}