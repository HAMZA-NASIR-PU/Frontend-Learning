document.querySelectorAll(".tooltip-wrapper").forEach((element) => {
    const tooltipText = element.getAttribute("data-tooltip");
    const position = element.getAttribute("data-tooltip-position") || "top";

    if (tooltipText) {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.innerText = tooltipText;
        tooltip.dataset.position = position;
        element.appendChild(tooltip);
    }
});
