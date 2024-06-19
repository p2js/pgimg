const palettes = {
    "Northern Lights (Purple/Blue/Green)": [
        "#7a62a1", "#7375b0", "#6987bd", "#6b99b8", "#6eaab2", "#70bbac", "#90c6af", "#b2d0b3"
    ],
    "Hers (Purple)": [
        "#6836ff", "#7b4fff", "#8f66ff", "#a171ff", "#bd8aff", "#c99fff", "#d0aaff", "#dab5ff"
    ],
    "Pastel (Various)": [
        "#d6e6ff", "#d7f9f8", "#ffffea", "#fff0d4", "#fbe0e0", "#e5d4ef", "#f2eaf7", "#f9f5fb"
    ],
    "Sunset (Red/Orange/Pink)": [
        "#f2816d", "#f4764a", "#ed702d", "#fc9267", "#f58c4a", "#fca867", "#fdb368", "#fdbe68"
    ],
    "Summer (Blue/Green)": [
        "#10b6d3", "#46bfca", "#65c7c0", "#7ed0b6", "#96d7aa", "#acdf9d", "#c1e68d", "#d6ed7b"
    ],
    "Natural (Green)": [
        "#e5f5e0", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"
    ],
    "Forest (Green)": [
        "#2e3923", "#314026", "#526a40", "#739559", "#84aa66", "#91ba70", "#9dca79", "#b5ea8c"
    ],
    "Military (Green)": [
        "#55614a", "#58664d", "#5a6b50", "#5f7556", "#637f5c", "#778f71", "#80967a", "#889d83"
    ],
    "Sky (Blue)": [
        "#688ad0", "#6f93dd", "#769cea", "#7da5f8", "#87afff", "#94b8ff", "#a1c0ff", "#aec9ff"
    ],
    "Ocean (teal)": [
        "#101f2b", "#1e3040", "#265c56", "#2e7871", "#137a76", "#2c938f", "#42aeaa", "#58cac6"
    ],
    "Deep Sea (teal)": [
        "#002429", "#06363a", "#0a393d", "#123f43", "#224c50", "#426669", "#628082", "#81999b"
    ],
    "Grayscale (grey)": [
        "#1e1e1e", "#2f2f2f", "#404040", "#515151", "#626262", "#737373", "#848484", "#959595"
    ],
    "Citrus (Yellow/Orange)": [
        "#f7df47", "#f7d843", "#f8d240", "#f8cb3c", "#f8c439", "#f8bd35", "#f9b732", "#f9b02e"
    ],
    "Paint (various)": [
        "red", "blue", "green", "yellow", "orange", "purple", "pink", "black"
    ]
}

// Populate the page's pallette selector with the color pallettes
Object.entries(palettes).forEach(([name]) => {
    let option = document.createElement("option");
    option.value = option.innerHTML = name;
    window.paletteSelector.appendChild(option);
});

// Redraw image on input update and page load
const updateImage = () => {
    generateAndPaintImage(window.seed.value, palettes[window.paletteSelector.value], window.canvas, window.image, 20);
}

window.seed.addEventListener("input", updateImage);
window.paletteSelector.addEventListener("change", updateImage);
updateImage();