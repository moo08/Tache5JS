//Boucles 
let n = parseInt(prompt("entrer un entier"));

         
      if(n){

        for (let i = 1; i <= 10; i++) {
          document.getElementById("produit").innerHTML +=
          `<tr>
          <td > ${n} </td>
          <td> ${i}</td>
          <td> ${n*i} </td>
           </tr>`
         };
         
        document.write(`</table>`)
      }else{
        prompt("veuillez saisir un nombre entier")
        

      }


