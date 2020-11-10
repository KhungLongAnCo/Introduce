declare module '*.svg' {
  const content: string;
  export const ReactComponent: ComponentType<React.HTMLAttributes<
    React.ReactSVGElement
  >>;
  export default content;
}
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
