/**
 * helper to hash and transform the seed to be more easily processed for image generation
 * @param {string} seed image generation seed 
 * @returns the seed, hashed and converted to base 8
 */
const seedToBase8String = async (seed) => {
    //get the SHA512 hash of the seed as a hex string
    let buffer = await crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(seed));
    let hash = "0x" + [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, "0")).join("");
    //convert to bigInt and then to base 8
    return BigInt(hash).toString(8);
}

/**
 * Paint a generated image from a canvas to a target img.
 * Assumes the canvas and image size is a scaled integer multiple of a width and height that multiply to 171.
 * 
 * @param {string} seed image generation seed
 * @param {*} palette color palette (array of 8 colors)
 * @param {HTMLCanvasElement} canvas canvas to use for image generation
 * @param {HTMLImageElement} target target img to paint
 * @param {number} scalingFactor scaling factor for computed pixels to canvas pixels
 */
const generateAndPaintImage = async (seed, palette, canvas, target, scalingFactor) => {
    //transform seed
    let b8string = await seedToBase8String(seed);
    //determine the pixel colors
    let pixelColors = b8string.split("").map(digit => palette[parseInt(digit, 8)]);

    //get canvas context
    let ctx = canvas.getContext("2d");
    let pixelWidth = canvas.width / scalingFactor;
    let pixelHeight = canvas.height / scalingFactor;

    for (let px = 0; px < pixelWidth * pixelHeight; px++) {
        //set canvas fill style to color
        ctx.fillStyle = pixelColors[px];
        //draw a square with the color on the canvas
        const x = (px % pixelWidth) * scalingFactor;
        const y = (Math.floor(px / pixelWidth)) * scalingFactor;
        ctx.fillRect(x, y, scalingFactor, scalingFactor);
    };

    target.src = canvas.toDataURL();
}