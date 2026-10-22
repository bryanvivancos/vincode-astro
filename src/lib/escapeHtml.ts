/** Escape text before it is interpolated into HTML. */
export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/** Escape text and keep line breaks as <br> in HTML email. */
export function escapeHtmlWithBreaks(value: string): string {
    return escapeHtml(value).replace(/\r\n|\r|\n/g, "<br>");
}

/** Collapse newlines so a field cannot break a subject or an attribute. */
export function singleLine(value: string): string {
    return value.replace(/[\r\n]+/g, " ").trim();
}

/** JSON for a script tag without a </script> breakout. */
export function jsonForScript(value: unknown): string {
    return JSON.stringify(value).replace(/</g, "\\u003c");
}
