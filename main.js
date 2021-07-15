name_of_the_students_array=[];
function submit()
{
    var display_student_array=[];
for (var j=1; j<=4; j++){
    var Name_of_the_student= document.getElementById("name_of_student_"+j).value;
    console.log(Name_of_the_student);
    name_of_the_students_array.push(Name_of_the_student);
}

console.log(name_of_the_students_array);

var length_of_the_students_array=name_of_the_students_array.length;
console.log(length_of_the_students_array);
for (var k= 0 ;k<length_of_the_students_array; k++){
    display_student_array.push("Name- "+name_of_the_students_array[k]);
    console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;

var remove_commas=display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;


document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}

function sorting()
{
    name_of_the_students_array.sort();
    console.log(name_of_the_students_array);
    var display_student_array_sorting=[];
    var length_of_the_students_array=name_of_the_students_array.length;
console.log(length_of_the_students_array);
for (var k= 0 ;k<length_of_the_students_array; k++){
    display_student_array_sorting.push("Name- "+name_of_the_students_array[k]);
    console.log(display_student_array_sorting);
}
console.log(display_student_array_sorting);


var remove_commas=display_student_array_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}