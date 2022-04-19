<template>
  <div class="card" v-for="card in user" :key="card.id">
      <div class="card-image">
          <img src="../../assets/image.svg" alt="img">
      </div>
      <div class="card-user_name">
      <h4>{{card.nickname}}</h4>
      <img src="../../assets/flag.svg" alt="flag">
      </div>
      <div class="card-discord">
        <div class="card-discord_name">
          <img src="../../assets/discord-fill.svg" alt="img">
          <span>{{card.discord_nickname}}</span>
        </div>
        <div class="card-discord_lang">
          <span>EN | RUS | ESP</span>
        </div>
      </div>
      <div class="card-user_info">
          {{card.description}}
      </div>
      <div class="card-user_devices">
        <div v-for="device in card.devices" :key="device.id">{{device}}</div>
      </div>
      <div class="card-user_skills">
        <div v-for="skill in card.skills" :key="skill.id">{{skill}}</div>
      </div>
      <hr>
      <span id="searching_for">Searching for</span>
      <div class="card-user_status">
          <div v-for="status in card.state" :key="status.id">{{status}}</div>
      </div>
      <div class="card-user_guild">
          <!-- <div>Guild</div>
          <div>{{card.guild}}</div> -->
      </div>
      <div class="card-footer">
          <img src="../../assets/novaImg.svg" alt="nova">
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserInfo',
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>

<style lang="scss" scoped>
.card{
    position: relative;
    z-index: 2;
    width: 300px;
    height: 100%;
    background-color: #272A2E;
    color: white;
    border-radius: 13px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    &-image{
        display: flex;
        justify-content: center;
        img{
            border-radius: 15px;
            width: 270px;
            height: 265px;
        }
    }
    &-discord{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: $stellar-font-family;
        font-style: normal;
        color: #878B90;
        margin-bottom: 10px;
       img{
            width: 15px;
            height: 15px;
            margin: 0px 5px 3px 0px;
       }
       &_name{
           display: flex;
           align-items: center;
           font-size: 14px;
       }
       &_lang{
           font-size: 13px;
       }
    }
    &-user{
        &_name{
            display: flex;
            justify-content: space-between;
            h4{
              margin: 20px 0px 0px 0px;
              font-family: $aven-font-family;
              font-weight: 700;
              font-style: normal;
              font-size: 30px;
            }
            img{
              margin-top: 30px;
            }
        }
        &_info{
            font-family: $stellar-font-family;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            margin: 7px 0px 14px 0px;
        }
        &_devices > div:first-child{
            width: 40px;
        }
        &_devices{
            display: flex;
            margin-bottom: 7px;
            div{
                width: 70px;
                height: 23px;
                background-color: #878B90;
                border-radius: 25px;
                text-align: center;
                text-transform: uppercase;
                font-family: $stellar-font-family;
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                margin-right: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        &_skills{
            display: flex;
            div{
                width: 70px;
                height: 23px;
                background-color: #BC1F6F;
                border-radius: 20px;
                text-transform: uppercase;
                font-family: $stellar-font-family;
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                margin: 0px 10px 15px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
            }
        }
        &_skills div:nth-child(2){
            background-color: #249BB6;
        }
        &_skills div:nth-child(3){
            background-color: #24B65E;
            width: 90px;
        }
        &_status{
            display: flex;
            align-items: center;
            div{
                width: 120px;
                height: 22px;
                background-color: #249BB6;
                text-align: center;
                border-radius: 10px;
                text-transform: uppercase;
                margin: 0px 10px 10px 0px;
                font-family: $stellar-font-family;
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        &_status > div:nth-child(2){
            width: 70px;
        }
        &_guild{
            margin-top: 50px;
            display: flex;
            align-items: center;
            div{
                font-family: $stellar-font-family;
                font-style: normal;
                font-weight: 500;
                font-size: 15px;
            }
        }
        &_guild > div:nth-child(1){
            width: 70px;
            background-color: #272A2E;
            border: 1px solid white;
            border-radius: 15px;
            text-transform: uppercase;
            text-align: center;
            margin-right: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
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
    #searching_for{
        font-family: $aven-font-family;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-transform: uppercase;
        margin: 15px 0px 7px 0px;
    }
}

</style>
