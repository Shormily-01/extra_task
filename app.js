
/* final result start*/
function show_result(){
    let ban = document.getElementById('ban').value;
    let eng = document.getElementById('eng').value;
    let fin = document.getElementById('fin').value;
    let acc = document.getElementById('acc').value;
    let mng = document.getElementById('mng').value;

if( ban>100 || eng>100 || fin>100 || acc>100 || acc>100 || mng>100){
    alert("Please Enter Mark in range of 100")
}


    let to = parseFloat(ban)+parseFloat(eng)+parseFloat(fin)+parseFloat(acc)+parseFloat(mng);
    
    let av = to/5
    
    if(ban<33 || eng<33 || fin<33 || acc<33 || mng<33){
        document.getElementById('gra').innerHTML= "F"
    }else{
        if(av >= 80 && av <= 100){
            document.getElementById('gra').innerHTML= "A+"
        }else if(av >= 70 && av <= 79){
            document.getElementById('gra').innerHTML="A"
        }else if(av >= 60 && av <= 69){
            document.getElementById('gra').innerHTML= "A-"
        }else if(av >= 50 && av <= 59){
            document.getElementById('gra').innerHTML="B"
        }else if(av >= 40 && av <= 49){
            document.getElementById('gra').innerHTML="C"
        }else if(av >= 33 && av <= 39){
            document.getElementById('gra').innerHTML="D"
        }else if(av >= 1 && av <= 32){
            document.getElementById('gra').innerHTML="F"
        }
    }

    document.getElementById('to').innerHTML= to;
    document.getElementById('av').innerHTML= av;

    if(ban<33 || eng<33 || fin<33 || acc<33 || mng<33){
        document.querySelector('.f-result h2').innerHTML= "You are failed";
    }else{
        document.querySelector('.f-result h2').innerHTML= "You are passed";
    }
}
/* final result end*/