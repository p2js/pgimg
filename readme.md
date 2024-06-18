# pgImg

A simple webtoy to generate unique images from text seeds.

You can try it over on [my website](https://alfiot.net/pgimg).

### How does it work?

Every color pallette is stored as a list of exactly 8 colors.

Each text seed is first compressed using a SHA-512 hash function; This compresses the seed to a 512 bit number, which gets converted into a 171-digit octal (base 8) number.

Every digit of that number corresponds to one of the 19*9 (171) squares on the image, which is painted to the corresponding color in the pallette.

### Want more color pallettes?

If you have one that you think works well, open an issue and I'll add it.