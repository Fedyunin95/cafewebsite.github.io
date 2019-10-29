export default function Rollup(rollup) {
  rollup.addEventListener("click", () => {
    document.querySelector(".js-header").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
