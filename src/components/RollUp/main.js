export default function Rollup(rollup) {
  rollup.addEventListener("click", () => {
    document.querySelector("body").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
