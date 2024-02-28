function calculation_popup(){
    let first_value=+prompt("Tell me your first value");
    let second_value=+prompt("Tell me your second value");

    alert(`Addition of ${first_value} and ${second_value} = ${first_value + second_value}`)
    alert(`Substraction of ${first_value} and ${second_value} = ${first_value - second_value}`)
    alert(`Multiplication of ${first_value} and ${second_value} = ${first_value * second_value}`)
    alert(`Division of ${first_value} and ${second_value} = ${first_value / second_value}`)
    alert(`Modulus of ${first_value} and ${second_value} = ${first_value % second_value}`)
}