
function submit(e){
    e.preventDefault();
    
const form =document.getElementsByClassName('#form');

const uname =document.getElementsByClassName('in1').value;
const phno =document.getElementsByClassName('in2').value;
const time =document.getElementsByClassName('in3').value;
const service =document.getElementsByClassName('in4').value;

    window.localStorage.setItem('username',uname)
    window.localStorage.setItem('PhoneNo',phno)
    window.localStorage.setItem('Timing',time)
    window.localStorage.setItem('Service',service)


    // Validateinputs();
}
// function Validateinputs(){
//     const nameval=uname.value.trim();
//     const phnoval=phno.value.trim();
//     const timeval=time.value.trim();
//     const serviceval=service.value.trim();
// }

// if(nameval===""){
//     setError(uname,'Name is required')
// }
// else
// setSuccess(uname)

// if(phno===""){
//     setError(phno,'PhoneNumber is required')
// }
// else
// setSuccess(phno)

// if(nameval===""){
//     setError(time,'Time is required')
// }
// else
// setSuccess(time)

// if(nameval===""){
//     setError(service,'Service you want')
// }
// else
// setSuccess(service)




// function setError(element,message){
//     const inputGroup=element.parentElement;
//     const errorElement=inputGroup.querySelector('.error');
//     errorElement.innertext=message;
//     inputGroup.classList.add('error')
//     inputGroup.classList.remove('success')
// }

// function setSuccess(element){
//     const inputGroup=element.parentElement;
//     const errorElement=inputGroup.querySelector('.error');
//     errorElement.innertext=" ";
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')
// }
