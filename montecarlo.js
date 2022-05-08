
function buildArray(item, count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(item);
    }
    return arr;
}

function joinArrays(items) {
    var output = [];

    for (var i = 0; i < items.length; i++) {
        var tmp = items[i];
        for (var ii = 0; ii < tmp.length; ii++) {
            output.push(tmp[ii])
        }
    }

    return output;
}

function spinWheel(wheel) {
    var rnd = Math.floor(Math.random() * wheel.length);
    var item = wheel[rnd];
    return item;
}

function spin(wheels) {
    var spin = [];

    for (var i = 0; i < wheels.length; i++) {
        spin.push(spinWheel(wheels[i]));
    }
    
    return spin;
}

function monteCarlo(spins, wheels) {
    const mc = document.createElement("div");
    mc.id = "montecarlo";

    for (var i = 0; i < spins; i++) {
        var curSpin = spin(wheels);

        var output = "";
        for (var ii = 0; ii < curSpin.length; ii++) {
            var curWheel = curSpin[ii];

            var tmp = curSpin[ii];
            if (typeof tmp === 'number') { 
                output = output + curSpin[ii];
            } else {                        
                // add quotes
                output = output + '"' + curSpin[ii] + '"';
            }

            if (ii != (curSpin.length -1)) {
                output += ",";
            } 
        }

        console.log(output);

        const div = document.createElement("div");
        const content = document.createTextNode(output);

        div.append(content);
        mc.append(div);

        output = "";
    }

    return mc;
}
