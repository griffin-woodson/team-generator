function createTeamProfile(data) {
  let employeecards = ``;

  for (let i = 0; i < data.length; i++) {
    let extradata = ``;
    if (data[i].getRole() === "Manager") {
      extradata = `<p class="card-text">Office Number: ${data[
        i
      ].getOfficeNumber()}</p>`;
    } else if (data[i].getRole() === "Engineer") {
      extradata = `<a href="https://github.com/${data[
        i
      ].getGithub()}" class="card-link">${data[i].getGithub()}</a>`;
    } else {
      extradata = `<p class="card-text">${data[i].getSchool()}</p>`;
    }

    var card = `<div class="col-4">
<div class="card">
    <div class="card-body">
      <h5 class="card-title">${data[i].getRole()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${data[i].getName()}</h6>
      <p class="card-text">ID Number: ${data[i].getId()}</p>
      <a href="mailto:${data[i].getEmail()}" class="card-link">${data[i].getEmail()}</a>
      ${extradata}
    </div>
  </div>
</div>`;

employeecards += card;
  }

  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Team of the Year</title>
</head>
<body>
    <header>
        <div class="container flex-row justify-content-between py-2"></div>
        <h1 class="page-title text-white bg-primary py-2 px-3" style="text-align: center">Team of the Year</h1>
    </header>
    <main class="container">
        <div class="row" id="employees">
        ${employeecards}
        </div>
    </main>
</body>
</html>
`;
}
module.exports = createTeamProfile;
