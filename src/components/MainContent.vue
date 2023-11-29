<template>
  <div class="main__content">
    <div class="main__content-left">
        <p class="main__content-degree">20°</p>
        <p class="main__content-today">Сегодня</p>
        <p class="main__content-time">Время: 21:54</p>
        <p class="main__content-city">Город: Санкт-Петербург</p>
        <div class="main__content-img">
            <img src="@/assets/images/sun.svg" alt="">
        </div>
    </div>
    <div class="main__content-right">
      <img src="@/assets/images/cloudBg.svg" alt="" class="main__content-bg">
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/temperature.svg" alt="">
        </div>
        <span>Температура</span>
        <span class="main__content-temp">20° - ощущается как 17°</span>
      </div>
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/pressure.svg" alt="">
        </div>
        <span>Давление</span>
        <span class="main__content-temp">765 мм ртутного столба - нормальное</span>
      </div>
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/osadki.svg" alt="">
        </div>
        <span>Осадки</span>
        <span class="main__content-temp">Без осадков</span>
      </div>
      <div class="main__content-item">
        <div class="main__content-icon">
          <img src="@/assets/images/wind.svg" alt="">
        </div>
        <span>Ветер</span>
        <span class="main__content-temp">3 м/с юго-запад - легкий ветер</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>