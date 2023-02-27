
const myh3 = document.querySelector('.myh3')
const myh1 = document.querySelector('.myh1')
const myp = document.querySelector('.myp')
const myBtn = document.querySelector('.btn')

const text_1_sr = `Početna`;
const text_1_en = 'Home';
const text_2_sr = 'Neki naslov';
const text_2_en = 'Some title';
const text_3_sr = 'Neki paragraf';
const text_3_en = 'Some paragraph';

myBtn.addEventListener('click', () => {
    language = myBtn.innerHTML
    changeLanguage(language)
})

const changeLanguage = (language) => {
    switch (language) {
      case 'EN':
        myh3.innerHTML = text_1_en
        myh1.innerHTML = text_2_en
        myp.innerHTML = text_3_en
        myBtn.innerHTML = 'SR'
        break
      case 'SR':
        myh3.innerHTML = text_1_sr
        myh1.innerHTML = text_2_sr
        myp.innerHTML = text_3_sr
        myBtn.innerHTML = 'EN'
        break
      default:
        break
    }
}

