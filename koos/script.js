
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
    "waking",
    "twisting",
    "straightening",
    "stairs",
    "standing",
    "rising",
    "bending"
    ]

    let score_lookup = {
        0:100,
        1:91.975,
        2:84.6,
        3:79.914,
        4:76.332,
        5:73.342,
        6:70.704,
        7:68.284,
        8:65.994,
        9:63.776,
        10:61.583,
        11:59.381,
        12:57.140,
        13:54.840,
        14:52.465,
        15:50.012,
        16:47.487,
        17:44.905,
        18:42.281,
        19:39.625,
        20:36.931,
        21:34.174,
        22:31.307,
        23:28.251,
        24:24.875,
        25:20.941,
        26:15.939,
        27:8.291,
        28:0
    }

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
            result.textContent = "You must respond to all items for an accurate assessment.";
        } else {
            result.textContent = score_lookup[total]+ "% functional.";
        }
        
    });

    
})
