<template>
  <div class="cards-list">
    <q-card class="card">
      <img src="../assets/card-img.svg">

      <q-card-section class="card-section">
        <div class="card-title">The sandbox</div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_up" size="15px" class="icon-up" />
            <p>Earnings</p>
            </div>
            <p class="card-info_stats positive">$ 1200.00</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_down" size="15px" class="icon-down" />
            <p>Number of NFT</p>
            </div>
            <p class="card-info_stats negative">11</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_down" size="15px" class="icon-down" />
            <p>NFT Total Price</p>
            </div>
            <p class="card-info_stats negative">$ 3400.00</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_up" size="15px" class="icon-up" />
            <p>In-game Token</p>
            </div>
            <p class="card-info_stats positive">1850</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_down" size="15px" class="icon-down" />
            <p>Ranking</p>
            </div>
            <p class="card-info_stats negative">63</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_up" size="15px" class="icon-up" />
            <p>Hours played</p>
            </div>
            <p class="card-info_stats negative">758</p>
        </div>
      </q-card-section>

    </q-card>

    <q-card class="card">
      <img src="../assets/card-img2.svg">

      <q-card-section class="card-section">
        <div class="card-title">Splinter Lands</div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_up" size="15px" class="icon-up" />
            <p>Earnings</p>
            </div>
            <p class="card-info_stats positive">$ 1200.00</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_down" size="15px" class="icon-down" />
            <p>Number of NFT</p>
            </div>
            <p class="card-info_stats negative">11</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_down" size="15px" class="icon-down" />
            <p>NFT Total Price</p>
            </div>
            <p class="card-info_stats negative">$ 3400.00</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_up" size="15px" class="icon-up" />
            <p>In-game Token</p>
            </div>
            <p class="card-info_stats positive">1850</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_down" size="15px" class="icon-down" />
            <p>Ranking</p>
            </div>
            <p class="card-info_stats negative">63</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_up" size="15px" class="icon-up" />
            <p>Hours played</p>
            </div>
            <p class="card-info_stats negative">758</p>
        </div>
      </q-card-section>

    </q-card>

    <q-card class="card">
      <img src="../assets/card-img3.svg">

      <q-card-section class="card-section">
        <div class="card-title">Axie infinity</div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_up" size="15px" class="icon-up" />
            <p>Earnings</p>
            </div>
            <p class="card-info_stats positive">$ 1200.00</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_down" size="15px" class="icon-down" />
            <p>Number of NFT</p>
            </div>
            <p class="card-info_stats negative">11</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_down" size="15px" class="icon-down" />
            <p>NFT Total Price</p>
            </div>
            <p class="card-info_stats negative">$ 3400.00</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_up" size="15px" class="icon-up" />
            <p>In-game Token</p>
            </div>
            <p class="card-info_stats positive">1850</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_down" size="15px" class="icon-down" />
            <p>Ranking</p>
            </div>
            <p class="card-info_stats negative">63</p>
        </div>
        <div class="card-info">
            <div class="card-info_name">
            <q-icon name="arrow_circle_up" size="15px" class="icon-up" />
            <p>Hours played</p>
            </div>
            <p class="card-info_stats negative">758</p>
        </div>
      </q-card-section>

    </q-card>

  </div>
</template>

<script>
export default {
  name: 'GameCard'
}
</script>

<style lang="scss" scoped>
.cards-list{
    display: flex;
}
.card{
    margin: 0px 15px 0px 15px;
    background-color: #1E2026;
    width: 280px;
    height: 430px;
    border-radius: 10px;
    color: #ffff;
    margin-top: 20px;
    p{
       margin: 0;
    }
    &-section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &-title{
        width: 230px;
        height: 30px;
        background: #BC1F6F;
        border-radius: 5px;
        text-transform: uppercase;
        text-align: center;
        padding: 5px;
    }
    .icon-up{
        color: #249BB6;
        margin-right: 7px;
    }
    .icon-down{
        color: #BC1F6F;
        margin-right: 7px;
    }
    &-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 230px;
        margin-top: 10px;
        &_name{
            display: flex;
            align-items: center;
        }
        &_stats{
            width: 100px;
            height: 25px;
            background-color: #1E2026;
            border-radius: 5px;
            text-align: right;
            padding: 2px 4px 2px 0px;
        }
        .negative{
            border: 1px solid #BC1F6F;
        }
        .positive{
            border: 1px solid #249BB6
        }
    }
}
</style>
