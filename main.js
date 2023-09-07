const input = document.getElementById("input");
let out = "";

function cipher(text) {
    out = text.split("").map((char) => String.fromCharCode(char.charCodeAt(0) ^ 10240 + 20)).join("");

    document.getElementById("output").value = `${out.length} characters to be copied.\n\nCipher output: "${out}"\n\nClick to copy.`;
}

cipher(input.value);
input.focus();
input.addEventListener("input", (event) => cipher(event.target.value));
document.getElementById("output").addEventListener("click", () => {
    const overlay = document.getElementById("overlay");

    overlay.style.display = "block";

    if (out.length > 0) {
        navigator.clipboard.writeText(out);
    }

    setTimeout(() => overlay.style.display = "none", 1000);
});