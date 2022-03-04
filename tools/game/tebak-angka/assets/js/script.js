
/*
  
  nama : candra dwi cahyo
  email : candradwicahyo18@gmail.com
  
*/

function tebakAngka() {
  
  const field = document.querySelector('.field');
  const randomNumber = Math.round(Math.random() * 100) + 1;
  const arr = [];
  
  const button = document.querySelector('.button');
  button.addEventListener('click', function() {
    const message1 = document.querySelector('.message1');
    
    // validation
    if (validation(field) == true) {
      
      const newArr = arr.push(field.value);
      const message2 = document.querySelector('.message2 b');
      message2.textContent = newArr;
      
      if (field.value == randomNumber) {
        message1.textContent = `benar! hasil tebakan sesungguhnya adalah : ${field.value}`;
      } else if (field.value < randomNumber) {
        message1.textContent = 'tebakan anda masih terlalu rendah!';
      } else if (field.value > randomNumber) {
        message1.textContent = 'tebakan anda terlalu tinggi!';
      }
      
    }
    
  });
  
}

tebakAngka();

function popup(icon, text) {
  
  swal.fire ({
    type: icon,
    text: text,
    confirmButtonColor: '#6C63FF'
  });
  
}

function validation(field) {
  
  if (!field.value) return popup('error', 'isi field terlebih dahulu!');
  
  if (field.value < 1 || field.value > 100) return popup('error', 'isi field dengan benar!');
  
  return true;
  
}
