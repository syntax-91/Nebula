import { Router } from "express";

export const MemeRouter = Router();

// meme

const memes = [
  /* окак */ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSMh6VGj91J4Z-GtSNMBlAB1YwkWuxYtINQ&s",
  /* скебоб */ "https://www.google.com/imgres?q=%D1%81%D0%BA%D0%B5%D0%B1%D0%BE%D0%B1&imgurl=https%3A%2F%2Fresizer.mail.ru%2Fp%2F1c1a7e30-14c3-55f4-9856-d938f36a80e6%2FAQAK_C0BhZZwn3wumJN3_B8StXtIKcjaJ_6nJn73cYIO0acVk9aznhvyl0Ty0pjxpIIb3_V4mjG_NblPhKyGJtWoPeQ.png&imgrefurl=https%3A%2F%2Fhi-tech.mail.ru%2Fnews%2F130371-kto-takoj-skebob-i-pochemu-on-virusitsya-v-seti%2F&docid=57RcbiNfdkvvzM&tbnid=_02cLTiOldPPPM&vet=12ahUKEwivxqnT6K2PAxWwHRAIHXlIDnAQM3oECHoQAA..i&w=531&h=531&hcb=2&ved=2ahUKEwivxqnT6K2PAxWwHRAIHXlIDnAQM3oECHoQAA",
  /* at eternity's gate */ "https://en.meming.world/images/en/1/17/Willem_Dafoe_Looking_Up.jpg",
  /* анонимус */ "https://img-webcalypt.ru/uploads/admin/images/meme-templates/y9VnOmlFYDDVFY5kjEAg0yWw5t2QFbZc.jpeg",
  /* i use arch btw */ "https://roboticoverlords.org/wallpapers/archbtw.png",
  /* i use arch bwt2*/ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBLFGWsGSMOtv9nl1wfHooj6fBXaqB6BOnA&s",
  /* skala */ "https://img-webcalypt.ru/uploads/admin/images/meme-templates/JmGHzplSI5y9mVU7I5dCVxYvitjhOscF.jpg",
  /* шлёпа */ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi9gkBWgKNcPJWQg4CIA8mPoIF12MzFLDCkw&s",
  /* шлёпа2  */ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToH7rQIrkerR2XeHDUFAg5KEwqkP5873r8gw&s",
];

const memes2 = [
  /* окак */ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSMh6VGj91J4Z-GtSNMBlAB1YwkWuxYtINQ&s",

  /* анонимус */ "https://img-webcalypt.ru/uploads/admin/images/meme-templates/y9VnOmlFYDDVFY5kjEAg0yWw5t2QFbZc.jpeg",
  /* i use arch btw */ "https://roboticoverlords.org/wallpapers/archbtw.png",
  /* i use arch bwt2*/ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBLFGWsGSMOtv9nl1wfHooj6fBXaqB6BOnA&s",
];

MemeRouter.get("/", (req, res) => {
  console.log("запрос на /meme");

  const randMeme = memes2[Math.floor(Math.random() * memes.length)];
  res.json({
    url: randMeme,
  });
});
