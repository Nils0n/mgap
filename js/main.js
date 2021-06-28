const scrollReveal = ScrollReveal({
  origin: 'top',
  distance:'30px',
  duration: 900,
 reset:true
});

scrollReveal.reveal(`
  #about h2, #about p ,
  .membros .item, .membros h3, .membros p , .membros .moto,
  .encontros .descricao , .membors .foto
`)