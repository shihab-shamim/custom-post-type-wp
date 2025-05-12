function copyBPlAdminShortcode(inputElement) {
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // For mobile
    document.execCommand("copy");

    const tooltip = inputElement.nextElementSibling;
    if (tooltip) {
        tooltip.textContent = "Copied!";
        setTimeout(() => {
            tooltip.textContent = "Copy To Clipboard";
        }, 2000);
    }
}