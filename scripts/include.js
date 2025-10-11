// Simple HTML include script
document.addEventListener("DOMContentLoaded", () => {
    const includeElements = document.querySelectorAll("[data-include]");

    includeElements.forEach(async (el) => {
        const file = el.getAttribute("data-include");
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Could not load ${file}`);
            el.innerHTML = await response.text();
        } catch (error) {
            console.error(error);
            el.innerHTML = "<!-- Include failed -->";
        }
    });
});
