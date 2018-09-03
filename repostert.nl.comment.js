(async function ()
 {
  let aryaArticle = Array.from(document.querySelectorAll('article'));

  aryaArticle.forEach(aArticle =>
   {
    let spanUser_Name = aArticle.querySelector('footer .username');

    if (!spanUser_Name)
     {
      return;
     }

    let strUser_Name = spanUser_Name.innerText.trim();

    if (strUser_Name === '')
     {
      return;
     }


    while (spanUser_Name.childNodes.length)
     {
      spanUser_Name.removeChild(spanUser_Name.firstChild);
     }


    let aUser_Name = spanUser_Name.appendChild(document.createElement('a'));

    aUser_Name.innerText = strUser_Name;
    aUser_Name.setAttribute('href', 'https://dumpstats.nl/reaguurder/' + strUser_Name);
    aUser_Name.setAttribute('target', 'repostert.nl/' + strUser_Name);
    aUser_Name.style.setProperty('color', 'inherit');


    let divArticle_Content = aArticle.querySelector('.cmt-content');

    if (!divArticle_Content)
     {
      return;
     }


    let strArticle_Content = divArticle_Content.innerText;

    switch (strArticle_Content.trim().toLowerCase())
     {
      case '-weggejorist-':
      case '-weggejorist en opgerot-':
       {
        let fArticle_Footer = aArticle.querySelector('footer');

        if (!fArticle_Footer)
         {
          return;
         }


        while (divArticle_Content.childNodes.length)
         {
          divArticle_Content.removeChild(divArticle_Content.firstChild);
         }


        let frmJoris = divArticle_Content.appendChild(document.createElement('form'));

        frmJoris.setAttribute('method', 'post');
        frmJoris.setAttribute('action', 'https://dumpstats.nl/weggejorist');
        frmJoris.setAttribute('target', 'repostert.nl/' + strUser_Name);
        frmJoris.setAttribute('enctype', 'application/x-www-form-urlencoded');


        let btnJoris = frmJoris.appendChild(document.createElement('button'));

        btnJoris.innerText = strArticle_Content;

        btnJoris.setAttribute('type', 'submit');
        btnJoris.setAttribute('name', 'searchtext');
        btnJoris.setAttribute('value', fArticle_Footer.innerText);

        btnJoris.style.setProperty('outline', 'none');
        btnJoris.style.setProperty('border', 'none');
        btnJoris.style.setProperty('padding', '0px');
        btnJoris.style.setProperty('background', 'inherit');
        btnJoris.style.setProperty('color', 'inherit');
        btnJoris.style.setProperty('cursor', 'pointer');

        break;
       }
     }

   });

 })();
