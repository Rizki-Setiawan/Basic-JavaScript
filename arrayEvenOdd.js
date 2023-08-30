const input = [4, 7, 2, 8, 9, 10, 15, 5, 1, 6, 12];

function evenOdd(input) {
    let even = [];
    let odd = [];
    input.forEach((value) => {
        if (value % 2 == 0) {
            even.push(value);
        } else if (value % 2 !== 0) {
            odd.push(value);
        }
    });
    return [even, odd];
}

function greaterNumb(input) {
    let greater = [];
    input.forEach((value) => {
        if (value > 6) {
            greater.push(value);
        }
    });
    return greater;
}

function merge(input, evenOdd, greaterNumb) {
    let convertMergeArr = "";
    const [even, odd] = evenOdd(input);
    const greater = greaterNumb(input);
    const mergeArr = [...even, ...odd, ...greater];
    mergeArr.forEach((value) => {
        convertMergeArr += value + " ";
    });
    console.log(
        "evenArray = ",
        even,
        "\noddArray = ",
        odd,
        "\ngreaterNumbArray = ",
        greater,
        "\nall values between 3 arrays = ",
        convertMergeArr,
    );
}

merge(input, evenOdd, greaterNumb);

console.log("fitur save");

console.log("fitur open");
