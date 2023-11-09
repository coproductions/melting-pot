export default function ImageBanner({ theme }: { theme: string | null }) {
  switch (theme) {
    case "2":
      return <div className={"theme-2-image"}></div>;
    default:
      return <div className={"default-image"}></div>;
  }
}
