textContent = [];

;[...document.querySelectorAll('td')].forEach(el => {
  
  if (el.textContent.replace(/\n/g, '').trim() !== '')
    textContent.push(
  		el.textContent
      	.replace(/\n/g, '')
      	.replace(/Citadel/g, ' - Citadel')
      	.replace(/Vallejo - Game/g, ' - Vallejo (Game)')
        .replace(/Vallejo - Model/g, ' - Vallejo (Model)')
        .replace(/P3 Formula/g, ' - P3 Formula')
      	.replace(/Army Painter/g, ' - Army Painter')
      	.replace(/                        /g, ' - ')
      	.trim()
  	)
})

console.table(textContent)


                        