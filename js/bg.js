var tag=1;
function  sortNumberAS(a,b)
{
    return Number(a) - Number(b);
}
function sortNumberDesc(a,b)
{
    return Number(b)-Number(a);
}

function SortTable(obj){
    var td0s=document.getElementsByName("td0");
    var td1s=document.getElementsByName("td1");
    var td2s=document.getElementsByName("td2");
    var  tdArray0=[];
    var  tdArray1=[];
    var  tdArray2=[];
    for (var i=0;i<td0s.length;i++){
        tdArray0.push(td0s[i].innerHTML);
    }
    for (var i=0;i<td1s.length;i++){
        tdArray1.push(td1s[i].innerHTML);
    }
    for (var i=0;i<td2s.length;i++){
        tdArray2.push(td2s[i].innerHTML);
    }
    var tds=document.getElementsByName("td"+obj.id.substr(2,1));
    var columnArray=[];
    for (var i=0;i<tds.length;i++){
        columnArray.push(parseFloat(tds[i].innerHTML));
    }
    var orginArray=[];
    for (var i=0;i<tds.length;i++){
        orginArray.push(columnArray[i]);
    }
    if (obj.className=="as"){
        columnArray.sort(sortNumberAS);
        obj.className="desc";
    }else {
        columnArray.sort(sortNumberDesc);
        obj.className="as";
    }


    for (var  i=0;i<columnArray.length;i++){
        for (var j=0;j<orginArray.length;j++){
            if (orginArray[j]==columnArray[i]){
                document.getElementsByName("td0")[i].innerHTML=tdArray0[j];
                document.getElementsByName("td1")[i].innerHTML=tdArray1[j];
                document.getElementsByName("td2")[i].innerHTML=tdArray2[j];
                orginArray[j]=null;
                break;
            }
        }
    }
}