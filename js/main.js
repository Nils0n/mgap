const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #about h2, #about p ,
  .membros .item, .membros h3, .membros p , .membros .moto,
  .encontros .descricao , .membors .foto
`,
  { interval: 100 }
)
