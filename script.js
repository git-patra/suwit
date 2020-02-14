function getCompPick() {
    const comp = Math.random();
  
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
  }
  
  function rules(comp, player) {
    if (player == comp) return "SERI!";
    if (player == "gajah") return (comp == "orang") ? "MENANG!" : "KALAH";
    if (player == "semut") return (comp == "gajah") ? "KALAH!" : "MENANG";
    if (player == "orang") return (comp == "semut") ? "MENANG!" : "KALAH";
  }
  
function rules(comp, player) {
    if (player == comp) return "SERI!";
    if (player == "gajah") return (comp == "orang") ? "MENANG!" : "KALAH";
    if (player == "semut") return (comp == "gajah") ? "KALAH!" : "MENANG";
    if (player == "orang") return (comp == "semut") ? "MENANG!" : "KALAH";
  }
  
  function putar() {
    const imgComp = document.querySelector('.img-comp');
    const gambar = ['gajah', 'semut', 'orang'];
  
    let i = 1;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
      if (new Date().getTime() - waktuMulai > 1000) {
        clearInterval;
        return;
      }
      imgComp.setAttribute('src', 'img/' + gambar[i++] + '1.png');
      if (i == gambar.length) i = 0;
    }, 100)
  }
  
  
  const pick = document.querySelectorAll('.player img');
  pick.forEach(function (i) {
    i.addEventListener('click', function (e) {
    const pComp = getCompPick();
    const pPlayer = i.getAttribute('alt');
        e.target.classList.toggle('bayang');
        console.log(e.target);
      const hasil = rules(pComp, pPlayer);
      putar();
  
      setTimeout(function () {
        const imgComp = document.querySelector('.img-comp');
        imgComp.setAttribute('src', 'img/' + pComp + '1.png');
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
        
      }, 1000);
  
  
    });
  });
  