export function game_count(inputs) {

    let player_one = 0;
    let player_two = 0;

    for (input in inputs) {
        if (inputs[input] === 1) {
            player_one += 1;
        } else {
            player_two += 1;
        }
    }

    if (player_one === player_two) {
        return player_one;
    } else {
        return player_one, player_two;
    }

}

