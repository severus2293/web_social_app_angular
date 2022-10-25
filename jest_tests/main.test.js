const {edit_mail,edit_date,edit_role} =  require("./functions_for_test");


describe('Edit Date Function:',() =>{
test("Date should be in format YYYY-MM-DD",() =>
{
  expect(edit_date('1987-05-03')).toBe('1987-05-03')
  expect(edit_date('1993-13-01')).toBe('check')
  expect(edit_date('1995-11-1')).toBe('check')
  expect(edit_date('2022.11.01')).toBe('check')
})
})

describe("Edit Role Function",() =>{
  test("Role should be user or admin",() =>
  {
    expect(edit_role('admin')).toBe('admin')
    expect(edit_role('ssdgf')).toBe('check')
    expect(edit_role('user')).toBe('user')
    expect(edit_role(undefined)).toBe('check')
  })
})

describe("Edit Mail Function",() =>{
  test("Mail should be in regex success",() =>
  {
    expect(edit_mail('slim@mail.ru')).toBe('slim@mail.ru')
    expect(edit_mail('slimmail.ru')).toBe('check')
    expect(edit_mail('slim@mailru')).toBe('slim@mailru')
    expect(edit_mail(undefined)).toBe('check')
  })
})
