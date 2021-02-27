
let get_value = function(radio_name) {
    let inputs = document.getElementsByName(radio_name);
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            return inputs[i].value;
        }
    }
    return null
}

document.getElementById("download_btn").addEventListener("click", function(event){
  window.open('/FAAM_download');
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function(){

    let input_items = [
    "standing",
    "walking_even",
    "walking_even_no_shoes",
    "up_hill",
    "down_hill",
    "up_stairs",
    "down_stairs",
    "uneven_ground",
    "curbs",
    "squatting",
    "up_on_toes",
    "walking_initially",
    "walking_five_min",
    "walking_ten_min",
    "walking_15_min",
    "home_responsibilities",
    "adls",
    "personal_care",
    "light_work",
    "heavy_work",
    "recreational_activities"
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

        if (count < 20) {
            result.textContent = "You may only skip one activity.";
        } else {
            let final = Math.round((total/(count*4)*100),2)
            result.textContent = final + "% functional.";
        }

    });

})
