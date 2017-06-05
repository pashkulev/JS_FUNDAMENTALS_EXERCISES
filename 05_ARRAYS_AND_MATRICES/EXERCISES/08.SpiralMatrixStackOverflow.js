function spiralArray(edge) {
    let arr = new Array(edge);
    let x = 0, y = edge;
    let total = edge * edge--;
    let dx = 1, dy = 0;
    let i = 1, j = 0;

    while (y) {
        arr[--y] = [];
    }

    while (i <= total) {
        arr[y][x] = i++;
        x += dx;
        y += dy;

        if (++j === edge) {
            if (dy < 0) {
                x++;
                y++;
                edge -= 2;
            }

            j = dx;
            dx = -dy;
            dy = j;
            j = 0;
        }
    }

    console.log(arr.map(r => r.join(' ')).join('\n'));
}

spiralArray(4);