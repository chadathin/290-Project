let get_value = function(radio_name) {
    let inputs = document.getElementsByName(radio_name);
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            return inputs[i].value;
        }
    }
    return null
}

document.getElementById("get_form_button").addEventListener("click", function(event){
  window.open('/ODI_download');
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", function(){

    let input_items = [
    "pain",
    "personal_care",
    "lifting",
    "walking",
    "sitting",
    "standing",
    "sleeping",
    "sex_life",
    "social_life",
    "traveling"
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

        if (count < 10) {
            result.textContent = "You may only skip one activity.";
        } else {
            let final = Math.round((total/(count*5)*100),2)
            result.textContent = final;
        }

    });

})
