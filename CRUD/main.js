var course_name=document.getElementById("course_name")
var course_category=document.getElementById("course_category")
var course_price=document.getElementById("course_price")
var course_description=document.getElementById("course_description")
var course_capacity=document.getElementById("course_capacity")
var clearbtn=document.getElementById("clear")


var data=document.getElementById("data");
var deleteBtn=document.getElementById("deleteBtn");
var search=document.getElementById("search");
var currIndex=0
var courses;
if(JSON.parse(localStorage.getItem("courses"))==null)
courses=[];
else{
  courses=JSON.parse(localStorage.getItem("courses"));
Dispaly();
}




btn.onclick=function(event){
  event.preventDefault();
  if(btn.value=="Add course")
  AddCourse();
  else
  UpdateInformation();
  clear();
  Dispaly();
  clearInvalid()


}
function clearInvalid(){
  course_name.classList.remove("is-valid");
  course_category. classList.remove("is-valid");
  course_price.classList.remove("is-valid");
  course_description.classList.remove("is-valid");
  course_capacity.classList.remove("is-valid");

}
//addcourses
function AddCourse(){
  var course={
    course_name:course_name.value,
    course_category:course_category.value,
    course_price:course_price.value,
    course_description:course_description.value,
    course_capacity:course_capacity.value

}
courses.push(course)
localStorage.setItem('courses',JSON.stringify(courses))
Swal.fire({
position: 'center',
icon: 'success',
title: 'Your course has been added',
showConfirmButton: false,
timer: 1500
})

}
function clear(){
    course_name.value="";
    course_category.value=""
    course_price.value=""
    course_description.value=""
    course_capacity.value=""
    clearInvalid()
}
//dispaly data 
function Dispaly(){
    var result=""
    for(var i=0;i<courses.length;i++){
        result+=`
    <tr>
    <td>${i+1}</td>
    <td>${courses[i].course_name}</td>
    <td>${courses[i].course_category}</td>
    <td>${courses[i].course_price}</td>
    <td>${courses[i].course_description}</td>
    <td>${courses[i].course_capacity}</td>
    <td><button id="updateBtn" class="btn btn-info "  onclick="Update(${i})"> update</button></td>
    <td><button id="deleteBtn" class="btn btn-danger text-center" onclick="DeleteCourse(${i})" >delete </button></td>
        </tr>`


    }
    data.innerHTML=result;

}
//delete course
 function DeleteCourse(index){
   
   Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
        courses.splice(index,1);
        localStorage.setItem('courses',JSON.stringify(courses))
   Dispaly();
      Swal.fire(
        'Deleted!',
        'Your course has been deleted.',
        'success'
      )
    }
  })



 }
 //delete all courses
 deleteBtn.onclick=function(){
    
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            courses=[];
            localStorage.setItem('courses',JSON.stringify(courses))
    data.innerHTML="";
          Swal.fire(
            'Deleted!',
            'All courses has been deleted.',
            'success'
          )
        }
      })
 }
//search

search.onkeyup=function(){
    var result=""
    for(var i=0;i<courses.length;i++){
        if(courses[i].course_name.toLowerCase().includes(search.value.toLowerCase())){
        result+=`
    <tr>
    <td>${i+1}</td>
    <td>${courses[i].course_name}</td>
    <td>${courses[i].course_category}</td>
    <td>${courses[i].course_price}</td>
    <td>${courses[i].course_description}</td>
    <td>${courses[i].course_capacity}</td>
    <td><button id="updateBtn" class="btn btn-info " onclick="Update(${i})" > update</button></td>
    <td><button id="deleteBtn" class="btn btn-danger text-center" onclick="DeleteCourse(${i})" >delete </button></td>
        </tr>`


    }}
    data.innerHTML=result;
}
//Update course
function Update(index){
  
  course_name.value=courses[index].course_name;
  course_category.value=courses[index].course_category
  course_price.value=courses[index].course_price
  course_description.value=courses[index].course_description
  course_capacity.value=courses[index].course_capacity
 
  btn.value='Update course'
  document.getElementById("btn").innerHTML='Update course'
  currIndex=index


  
}
 function UpdateInformation(){
  var name=courses[currIndex].course_name
courses[currIndex].course_name=course_name.value
courses[currIndex].course_category=course_category.value
courses[currIndex].course_price=course_price.value
courses[currIndex].course_description=course_description.value
courses[currIndex].course_capacity=course_capacity.value
localStorage.setItem('courses',JSON.stringify(courses))
Swal.fire({
  position: 'center',
  icon: 'success',
  title: `${name} has been Updated`,
  showConfirmButton: false,
  timer: 1500
  })

btn.value='Add course'
document.getElementById("btn").innerHTML='Add course'




 }
//validation


course_name.onkeyup=function(){
  var pattern=/^[A-Z][a-z]{2,10}$/

    if(pattern.test(course_name.value)){
      if(course_name.classList.contains("is-invalid") && document.getElementById("alert").classList.contains("d-block")){
        course_name.classList.replace("is-invalid","is-valid")
        document.getElementById("alert").classList.replace("d-block","d-none")
      }
        else
        course_name.classList.add("is-valid")
        disabeld();

  
     
    
      
    }
    else{
      
      if(course_name.classList.contains("is-valid") && document.getElementById("alert").classList.contains("d-none")){
        course_name.classList.replace("is-valid","is-invalid")
        document.getElementById("alert").classList.replace("d-none","d-block")
      
      }
        else
        course_name.classList.add("is-invalid")
        document.getElementById("alert").classList.replace("d-none","d-block")
        
        btn.setAttribute("disabeld","disabeld")
      }
     
     

    }
    //course category
    course_category.onkeyup=function(){
      var pattern=/^[A-Z][a-z]{2,10}$/
    
        if(pattern.test(course_category.value)){
          if(course_category.classList.contains("is-invalid") && document.getElementById("category-alert").classList.contains("d-block")){
            course_category.classList.replace("is-invalid","is-valid")
            document.getElementById("category-alert").classList.replace("d-block","d-none")
          }
            else
            course_category.classList.add("is-valid")
            disabeld();
            
    
         
          
        }
        else{
          
          if(course_category.classList.contains("is-valid") && document.getElementById("category-alert").classList.contains("d-none")){
            course_category.classList.replace("is-valid","is-invalid")
            document.getElementById("category-alert").classList.replace("d-none","d-block")
          
          }
            else
            course_category.classList.add("is-invalid")
            document.getElementById("category-alert").classList.replace("d-none","d-block")
            
            btn.setAttribute("disabeld","disabeld")
          }
         
         
    
        }

//course price
course_price.onkeyup=function(){
  var pattern=/^[0-9]{2,3}$/

    if(pattern.test(course_price.value)){
      if(course_price.classList.contains("is-invalid") && document.getElementById("alert-price").classList.contains("d-block")){
        course_price.classList.replace("is-invalid","is-valid")
        document.getElementById("alert-price").classList.replace("d-block","d-none")
      }
        else
        course_price.classList.add("is-valid")
        disabeld();

    

     
    }
      
  
    else{
      
      if(course_price.classList.contains("is-valid") && document.getElementById("alert-price").classList.contains("d-none")){
        course_price.classList.replace("is-valid","is-invalid")
        document.getElementById("alert-price").classList.replace("d-none","d-block")
      
      }
        else
        course_price.classList.add("is-invalid")
        document.getElementById("alert-price").classList.replace("d-none","d-block")
        
        btn.setAttribute("disabeld","disabeld")
      }
     
     

    }
    //description
    course_description.onkeyup=function(){
      var pattern=/^[A-Za-z0-9\s]{2,120}$/
    
        if(pattern.test(course_description.value)){
          if(course_description.classList.contains("is-invalid")){
            course_description.classList.replace("is-invalid","is-valid")}
            else
            course_description.classList.add("is-valid")
            disabeld();
    
          
          
        }
        else{
          
          if(course_description.classList.contains("is-valid")){
            course_description.classList.replace("is-valid","is-invalid")}
            else
            course_description.classList.add("is-invalid")
            
            btn.setAttribute('disabled','disabled')
          }
         
         
    
        }
//capcity
course_capacity.onkeyup=function(){
  var pattern=/^[0-9]{2,3}$/

    if(pattern.test(course_capacity.value)){
      if(course_capacity.classList.contains("is-invalid")){
        course_capacity.classList.replace("is-invalid","is-valid")}
        else
        course_capacity.classList.add("is-valid")
        disabeld();

      
    }
    else{
      
      if(course_capacity.classList.contains("is-valid")){
        course_capacity.classList.replace("is-valid","is-invalid")}
        else
        course_capacity.classList.add("is-invalid")
        
        btn.setAttribute('disabled','disabled')
      }
     
     

    }
    function disabeld(){
      if(course_name.classList.contains("is-valid") && course_category.classList.contains("is-valid") && course_price.classList.contains("is-valid") && course_description.classList.contains("is-valid") && course_capacity.classList.contains("is-valid")){

        btn.removeAttribute('disabled');
        }
    }
    clearbtn.addEventListener("click",()=>{
      course_name.classList.remove("is-valid")
      course_price.classList.remove("is-valid")
      course_description.classList.remove("is-valid")
      course_capacity.classList.remove("is-valid")
      course_category.classList.remove("is-valid")
      btn.setAttribute('disabled','disabled')
    })
    


    
  
    

  


