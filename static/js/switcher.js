containers = $('.switch-container');
anchor = location.hash.substring(1)
if (anchor) {
    console.log('anch')
    show_now = anchor;
    switcher(anchor)
} else {
    show_now = containers[0].getAttribute('switch-name');
    switcher(show_now);
}

function get_switch_container(name){
    return $(`[switch-name=${name}]`)
}

function switcher(name){
    console.log(name)
    get_switch_container(show_now).hide();
    element = get_switch_container(name);
    element.show();
    location.hash = name;
    show_now = name;
}

function connect_button(button, name){
    button.click(function (){
        switcher(name);
    })
}

function prepaire_elements() {
    for (let elem of containers) {
        elem_name = elem.getAttribute('switch-name');
        button = $(`[switcher-name=${elem_name}]`);
        connect_button(button, elem_name)
    }
}



setInterval(function () {
    anchor1 = location.hash.substring(1)
    if (anchor != anchor1){
        anchor = anchor1
        switcher(anchor)
    }
}, 100)
prepaire_elements()