function edit_mail(text){
  let cur = "check";
  if (/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(text))
    cur = text;
  return cur
}

function edit_date(text){
  let cur = "check";
  if (/[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/.test(text))
    cur = text;
  return cur
}

function edit_role(text){
  let cur = "check"
  if(text === 'admin' || text === 'user') {
    cur = text
  }
  return cur
}

module.exports = {edit_mail,
  edit_date,
  edit_role
}
