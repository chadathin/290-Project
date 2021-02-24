
let get_value = function(radio_name) {
    let inputs = document.getElementsByName(radio_name);
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            return inputs[i].value;
        }
    }
    return null
}

document.addEventListener("DOMContentLoaded", function(){
    
    let input_items = [ 
    "adls",
    "frustrated",
    "recovery",
    "while_running",
    "after_running",
    "mileage",
    "long_run",
    "pace",
    "confidence"
    ]


    let result = document.getElementById("result")
    let calc_button = document.getElementById("calculate");
    calc_button.addEventListener("click", function(){
        let total = 0;
        let count = 0;

        for (var i = 0; i < input_items.length; i++) {
            curr = get_value(input_items[i]);
            if (curr != null && curr != "N/A") {
                total += parseInt(curr);
                count += 1
            }
        }

        if (count < 7) {
            result.textContent = "Please answer all items for an accurate assessment.";
        } else {
            result.textContent = total+ "/36";
        }
        
    });

    
})
