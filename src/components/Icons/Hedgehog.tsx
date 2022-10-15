interface props {
    width: number
    height: number
    fill: string
}
const Hedgehog = ( {width, height, fill} : props) => {
    return (
        <svg width={width} height={height} viewBox="0 0 1280.000000 808.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,808.000000) scale(0.100000,-0.100000)" fill={fill} stroke="none">
                <path d="M7100 7920 c-239 -87 -438 -155 -441 -152 -3 4 -14 60 -24 125 -9 64 -18 117 -19 117 -1 0 -190 -99 -419 -219 l-418 -219 -96 144 c-53 79 -100 144 -104 144 -5 0 -153 -119 -328 -265 -176 -146 -324 -265 -329 -265 -5 0 -26 44 -47 98 -21 53 -44 112 -51 130 l-13 33 -362 -336 c-199 -184 -365 -335 -368 -335 -3 0 -53 65 -110 145 -57 79 -107 142 -111 140 -3 -2 -105 -131 -225 -288 l-219 -283 -184 88 c-102 49 -186 87 -189 84 -2 -2 -36 -138 -74 -302 -38 -165 -72 -305 -74 -312 -3 -9 -17 -2 -42 21 -77 70 -168 147 -174 147 -4 0 -21 -62 -39 -137 -79 -339 -158 -664 -162 -668 -2 -2 -68 17 -146 42 -79 25 -144 43 -146 42 -1 -2 1 -247 4 -544 l7 -540 -33 -136 c-166 -686 -492 -1196 -879 -1375 -93 -43 -174 -62 -298 -70 -96 -7 -98 -6 -115 17 -67 97 -193 189 -310 226 -65 21 -91 24 -162 20 -159 -8 -272 -90 -352 -254 -38 -78 -43 -96 -43 -158 0 -57 5 -81 29 -129 39 -80 119 -157 203 -196 186 -86 165 -67 303 -273 172 -256 268 -375 455 -563 339 -341 713 -591 1171 -783 396 -165 693 -234 1314 -306 124 -14 236 -28 248 -31 22 -4 19 -10 -50 -82 -118 -124 -168 -246 -139 -335 15 -45 78 -102 128 -116 50 -14 1369 -15 1444 -1 193 36 376 221 451 456 l23 74 1486 0 1486 0 -72 -73 c-180 -184 -204 -414 -47 -457 29 -7 291 -10 869 -8 l828 3 56 28 c32 15 79 51 108 82 81 85 151 254 151 361 0 49 8 74 22 74 21 0 908 264 1058 315 696 236 1165 490 1251 679 42 92 22 112 -110 109 -67 -1 -182 -17 -376 -53 -523 -96 -657 -103 -702 -34 -13 21 -14 31 -4 64 25 84 49 84 138 -3 32 -31 56 -47 61 -42 5 6 69 183 142 395 73 212 136 389 140 393 4 5 53 2 108 -7 54 -9 107 -16 116 -16 15 0 16 40 16 445 0 417 1 445 18 445 9 0 70 -11 135 -24 68 -13 117 -19 117 -13 0 6 -70 231 -156 501 -86 270 -157 495 -157 500 -1 6 75 28 170 51 95 22 175 44 179 47 3 4 -129 170 -295 370 -165 200 -301 366 -301 369 0 4 65 35 145 69 80 35 145 66 145 70 0 4 -160 159 -356 345 -318 302 -354 338 -337 349 10 7 69 43 131 80 61 38 112 71 112 75 0 3 -167 120 -371 260 -277 189 -369 257 -364 269 3 8 35 64 71 124 37 61 62 113 58 118 -5 5 -76 32 -159 60 -82 28 -199 69 -260 90 -60 21 -211 73 -335 116 -124 42 -227 79 -229 81 -2 1 41 52 97 111 l101 109 -92 17 c-288 52 -930 176 -934 180 -3 3 16 58 42 123 26 65 49 124 52 131 4 9 -101 12 -506 12 -511 0 -511 0 -511 21 0 11 5 63 11 115 6 52 9 97 6 100 -3 3 -210 -42 -461 -100 -250 -58 -461 -106 -469 -106 -10 0 -21 32 -38 110 -13 61 -26 110 -29 109 -3 0 -201 -72 -440 -159z"/>
            </g>
        </svg>
    )
}

export default Hedgehog