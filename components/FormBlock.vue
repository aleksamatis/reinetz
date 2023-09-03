<template>
  <form class="subscribe">
    <div class="subscribe__text">Подпишись на рассылку</div>
    <input class="subscribe__input" type="email" placeholder="Email" />
    <button class="subscribe__btn">Подписаться</button>
  </form>
</template>

<style lang="scss" scoped>
.subscribe {
  display: flex;
  background: black;
  padding: 35px 30px;
  align-items: center;
  column-gap: 35px;
  row-gap: 40px;

  .subscribe__text {
    flex: 1;
    font-size: 22px;
    font-style: normal;
    color: #ffffff;
    font-weight: 800;
    line-height: 30px;
  }

  .subscribe__btn {
    display: inline-flex;
    padding: 10px 50px;
    justify-content: center;
    width: 223px;
    height: 46px;
    align-items: center;
    border-radius: 2px;
    background: blue;
    color: white;
    border: none;
    cursor: pointer;
  }

  .subscribe__input {
    border: none;
    background: white;
    border-bottom: 1px solid gray;
    color: black;
    display: inline-block;
    box-sizing: border-box;
    height: 46px;
    flex: 1;
    max-width: 350px;
    padding: 10px;
  }

  .subscribe__input,
  .subscribe__btn {
    flex-shrink: 0;
  }
}

::placeholder {
  padding: 1px;
}

@media screen and (max-width: 700px) {
  .subscribe {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
