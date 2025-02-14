function showAlert(){
    alert('hello! the button is clicked, this JS class')
}
function changeText(){
    document.getElementById('text').innerHTML="Text Changed";
}
function handleClick() {
    document.getElementById('clickMessage').innerHTML='Button Clicked!';
}
function ValidateFrom(){
    let name = documet.getElementById('name').value;
    if(name==''){
        alert('Please enter your name.');
        return false;
    }
    return true;
}
function checkNumber() {
    let num = parseInt(document.getElementById('numberInput').value);
    let result = num > 10? 'Greater than 10': '10 or less';
    document.getElementById('numberResult').innerHTML = result;
   }
    function checkAge() {
       let age = parseInt(document.getElementById('ageInput').value);
       if(age >= 18) {
        document.getElementById('ageResult').innerHTML = 'You are an adult';
      } else {
       document.getElementById('ageResult').innerHTML = 'You are a minor';
      }
    }
    function displayArrayItem() {
        let items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']; 
        let index = parseInt(document.getElementById('arrayIndex').value);
        let result = items[index] || 'Invalid index';
        document.getElementById('arrayResult').innerHTML = result;
    }