export function validateInput(input) {
    
  const none = undefined;
  console.log(input);
  
  if (input === undefined || input === null || input === none || input === "") {
    return false;
  }
  
  return true;
}

export function validateEmail(email) {
  const reply = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reply.test(String(email).toLowerCase());
}

