document.getElementById("submit").onclick = function(){
    var students = document.getElementById("number").value;
    var total = parseInt(document.getElementById("totalmark").value);
    students = parseInt(students);
    var marks = document.getElementById("inputs");
    var h4 = document.createElement("h4");
    h4.innerText = `Enter mark of ${students} students`;
    marks.appendChild(h4);
    marks.style.backgroundColor = "whitesmoke";
    document.getElementById("number").value = "";
    document.getElementById("totalmark").value = "";
    marks.style.height = "300px";
    marks.style.overscrollBehaviorX = "scroll";
    for(let i=0;i<students;i++){
        var div = document.createElement("div");
        div.className = "container d-flex shadow mb-3 p-2 rounded";
        div.style.backgroundColor = "white";
        var label = document.createElement("label");
        label.innerText = (i+1) + " ";
        label.style.fontSize = "25px";
        label.style.textDecoration = "bold";
        var input = document.createElement("input");
        input.className = "form-control";
        input.id = "m"+(i+1);
        input.placeholder = "Enter marks of student "+(i+1);
        input.style.marginLeft = "4px";
        div.appendChild(label);
        div.appendChild(input);
        marks.appendChild(div);
    }
    var calbutton = document.createElement("button");
    calbutton.innerText = "Calculate"
    calbutton.className = "btn btn-outline-success";
    calbutton.id = "calculate";
    marks.appendChild(calbutton);


    calbutton.onclick = function(){
        var markarray = [];
        counts = [];
        for(let i=0;i<students;i++){
            var mark = parseFloat(document.getElementById("m"+(i+1)).value);
            document.getElementById("m"+(i+1)).value = "";
            markarray.push(mark/total * 100);
        }
        var length = markarray.length;
        var tablearr = []
        for(let i=0;i<8;i++){
            counts[i] = 0;
            let table = document.createElement("table");
            table.className = "table table-dark table-bordered rounded";
            tablearr.push(table)
        }
        var results = ["Fail","35 - 40","41 - 50","51 - 60","61 - 70"," 71 - 80","81 - 90","91-100"]
        var ress =  document.getElementById("results");
        ress.style.height="400px";
        ress.style.backgroundColor = "white";
        for(let i=0;i<8;i++){
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");
            tbody.id = `t${i}`;
            var theadr1 = document.createElement("tr");
            var theadr2 = document.createElement("tr");
            var th1 = document.createElement("th");
            var th2 =  document.createElement("th");
            var th3 = document.createElement("th");
            th1.innerText = "Roll number";
            th2.innerText = "Mark";
            th3.colSpan = "2";
            th3.innerHTML = `<h5>${results[i]}<h5>`
            theadr2.appendChild(th3);
            theadr1.appendChild(th1);
            theadr1.appendChild(th2); 
            thead.appendChild(theadr2);
            thead.appendChild(theadr1);
            tablearr[i].appendChild(thead);
            tablearr[i].appendChild(tbody);
            ress.appendChild(tablearr[i]);
        }
        for(let i=0;i<length;i++){
            let mark = markarray[i];
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var tr2 = document.createElement("tr");
            td1.innerText = (i+1);
            td2.innerText = markarray[i];
            tr.appendChild(td1);
            tr.appendChild(td2);
            if(mark < 35){
                var tbody = document.getElementById("t0");
                tbody.appendChild(tr);
                tablearr[0].appendChild(tbody);
                counts[0]++;
            }
            else if(mark>=35 && mark<=40){
                var tbody = document.getElementById("t1");
                tbody.appendChild(tr);
                tablearr[1].appendChild(tbody);
                counts[1]++;
            }
            else if(mark>=41 && mark<=50){
                var tbody = document.getElementById("t2");
                tbody.appendChild(tr);
                tablearr[2].appendChild(tbody);
                counts[2]++;
            }
            else if(mark>=51 && mark<=60){
                var tbody = document.getElementById("t3");
                tbody.appendChild(tr);
                tablearr[3].appendChild(tbody);
                counts[3]++;
            }
            else if(mark>=61 && mark<=70){
                var tbody = document.getElementById("t4");
                tbody.appendChild(tr);
                tablearr[4].appendChild(tbody);
                counts[4]++;
            }
            else if(mark>=71 && mark<=80){
                var tbody = document.getElementById("t5");
                tbody.appendChild(tr);
                tablearr[5].appendChild(tbody);
                counts[5]++;
            }
            else if(mark>=81 && mark<=90){
                var tbody = document.getElementById("t6");
                tbody.appendChild(tr);
                tablearr[6].appendChild(tbody);
                counts[6]++;
            }
            else if(mark>=91 && mark<=100){
                var tbody = document.getElementById("t7");
                tbody.appendChild(tr);
                tablearr[7].appendChild(tbody);
                counts[7]++;
            }
        }
        console.log(counts)
         for(let i=0;i<8;i++){
            if(counts[i] != 0){
                
                var tbody = document.getElementById("t"+i);
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                td.innerText = "Total students = "+counts[i];
                td.colSpan = "2";
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
            else{
                ress.removeChild(tablearr[i]);
            }
        } 

    }
}