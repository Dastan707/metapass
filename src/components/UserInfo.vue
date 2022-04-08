<template>
  <div class="card">
      <div class="card-image">
          <img src="../assets/image.svg" alt="img">
      </div>
      <div class="card-user_name">
      <h4>Player_001</h4>
      </div>
      <p class="card-user_info">
          Player short bio info Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, atque!
      </p>
      <div class="card-user_skills">
        <p>Player</p>
        <p>Coach</p>
        <p>NFT artist</p>
      </div>
      <hr>
      <div class="card-user_status">
          <p>In search for game</p>
          <p>Rents out of NFT</p>
          <p>Rents NFT</p>
      </div>
      <div class="card-user_guild">
          <span>
              <p>Guild</p>
          </span>
          <span>
            <p>Nova Guild Games</p>
          </span>
      </div>
      <div class="card-footer">
          <img src="../assets/novaImg.svg" alt="nova">
      </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style lang="scss" scoped>
.card{
    width: 300px;
    height: 100%;
    background-color: #272A2E;
    // box-shadow: 0px 3.24324px 20.2703px rgba(0, 0, 0, 0.1);
    color: white;
    border-radius: 13px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    &-image{
        display: flex;
        justify-content: center;
        img{
            border-radius: 20px;
            width: 270px;
            height: 250px;
        }
    }
    &-user{
        &_name{
            h4{
              margin: 20px 0px;
            }
        }
        &_skills{
            display: flex;
            justify-content: space-between;
            p{
                width: 70px;
                height: 23px;
                border-radius: 10px;
                background-color: #BC1F6F;
                border-radius: 20px;
                text-align: center;
                text-transform: uppercase;
            }
        }
        &_skills p:nth-child(2){
            background-color: #249BB6;
        }
        &_skills p:nth-child(3){
            background-color: #24B65E;
            width: 90px;
        }
        &_status{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            p{
                width: 100%;
                height: 22px;
                background-color: #249BB6;
                text-align: center;
                border-radius: 10px;
                text-transform: uppercase;
                margin-bottom: 10px;
            }
        }
        &_guild{
            margin-top: 50px;
            display: flex;
            align-items: center;
        }
        &_guild > span:nth-child(1){
            p{
                width: 70px;
                background-color: #272A2E;
                border: 1px solid white;
                border-radius: 10px;
                text-transform: uppercase;
                text-align: center;
                margin-right: 10px;
            }
        }
    }
    hr{
        width: 100%;
    }
    &-footer{
        img{
            width: 100%;
        }
    }
}

</style>
